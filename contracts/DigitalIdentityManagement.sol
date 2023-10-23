// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract DigitalIdentityManagement {
    uint256 public serviceProvidersCount; // Variable to store the number of service providers
    address[] public serviceProviderAddresses; // Array to store service provider addresses
    struct User {
        string user_FirstName;
        string user_MiddleName;
        string user_LastName;
        string user_Email;
        string user_dob;
        string user_pno;
        string userPhysicalAddress;
        bool isUserSet;
        mapping(address => bool) userAccessList; // Mapping of service providers with access
    }

    struct ServiceProvider {
        address serviceProviderAddress;
        string serviceProviderName;
        bool isRegistered;
    }

    mapping(address => User) public users;
    mapping(address => ServiceProvider) public serviceProviders;

    event UserAdded(address indexed userAddress);
    event ServiceProviderAdded(address indexed serviceProviderAddress);
    event ServiceProviderRemoved(address indexed serviceProviderAddress);
    event AccessGranted(address indexed userAddress, address indexed serviceProviderAddress);
    event AccessRevoked(address indexed userAddress, address indexed serviceProviderAddress);
    event UserUpdated(address indexed userAddress);


    // Function to allow users to add their data
    function addUser(
        string memory _firstName,
        string memory _middleName,
        string memory _lastName,
        string memory _email,
        string memory _dob,
        string memory _pno,
        string memory _physicalAddress
    ) external {
        User storage user = users[msg.sender];
        user.user_FirstName = _firstName;
        user.user_MiddleName = _middleName;
        user.user_LastName = _lastName;
        user.user_Email = _email;
        user.user_dob = _dob;
        user.user_pno = _pno;
        user.userPhysicalAddress = _physicalAddress;
        user.isUserSet = true;

        emit UserAdded(msg.sender);
    }

    // Function to update user data
    function updateUser(
        string memory _firstName,
        string memory _middleName,
        string memory _lastName,
        string memory _email,
        string memory _dob,
        string memory _pno,
        string memory _physicalAddress
    ) external {
        User storage user = users[msg.sender];
        require(user.isUserSet, "User not found");
        
        user.user_FirstName = _firstName;
        user.user_MiddleName = _middleName;
        user.user_LastName = _lastName;
        user.user_Email = _email;
        user.user_dob = _dob;
        user.user_pno = _pno;
        user.userPhysicalAddress = _physicalAddress;

        emit UserUpdated(msg.sender);
    }

    // Function to add a service provider
    function addServiceProvider(address _serviceProviderAddress, string memory _serviceProviderName) external {
        ServiceProvider storage provider = serviceProviders[_serviceProviderAddress];
        require(!provider.isRegistered, "Service Provider is already registered");

        provider.serviceProviderAddress = _serviceProviderAddress;
        provider.serviceProviderName = _serviceProviderName;
        provider.isRegistered = true;
        serviceProvidersCount++; // Increment the count
        serviceProviderAddresses.push(_serviceProviderAddress); // Add the address to the array

        emit ServiceProviderAdded(_serviceProviderAddress);
    }
    // Function to remove a service provider
    function removeServiceProvider(address _serviceProviderAddress) external {
        ServiceProvider storage provider = serviceProviders[_serviceProviderAddress];
        require(provider.isRegistered, "Service Provider not registered");

        delete serviceProviders[_serviceProviderAddress];
        serviceProvidersCount--; // Decrement the count
        for (uint256 i = 0; i < serviceProviderAddresses.length; i++) {
            if (serviceProviderAddresses[i] == _serviceProviderAddress) {
                serviceProviderAddresses[i] = serviceProviderAddresses[serviceProviderAddresses.length - 1];
                serviceProviderAddresses.pop();
                break;
            }
        }

        emit ServiceProviderRemoved(_serviceProviderAddress);
    }


    // Function to grant access to a service provider
    function grantAccess(address _serviceProviderAddress) external {
        require(users[msg.sender].isUserSet, "User not found");
        require(serviceProviders[_serviceProviderAddress].isRegistered, "Service Provider not registered");
        require(!users[msg.sender].userAccessList[_serviceProviderAddress], "Access already granted");

        users[msg.sender].userAccessList[_serviceProviderAddress] = true;

        emit AccessGranted(msg.sender, _serviceProviderAddress);
    }

    // Function to revoke access from a service provider
    function revokeAccess(address _serviceProviderAddress) external {
        require(users[msg.sender].isUserSet, "User not found");
        require(serviceProviders[_serviceProviderAddress].isRegistered, "Service Provider not registered");
        require(users[msg.sender].userAccessList[_serviceProviderAddress], "Access not granted");

        users[msg.sender].userAccessList[_serviceProviderAddress] = false;

        emit AccessRevoked(msg.sender, _serviceProviderAddress);
    }

    // Function to get user details
    function getUserDetails(address _userAddress) external view returns (
        string memory user_FirstName,
        string memory user_MiddleName,
        string memory user_LastName,
        string memory user_Email,
        string memory user_dob,
        string memory user_pno,
        string memory userPhysicalAddress
    ) {
        if (_userAddress == address(0)) {
            require(users[msg.sender].isUserSet, "User not found");
            _userAddress = msg.sender;
        } else {
            require(users[_userAddress].isUserSet, "User not found");
        }

        require(
            msg.sender == _userAddress || users[_userAddress].userAccessList[msg.sender],
            "Access denied"
        );

        User storage user = users[_userAddress];
        return (
            user.user_FirstName,
            user.user_MiddleName,
            user.user_LastName,
            user.user_Email,
            user.user_dob,
            user.user_pno,
            user.userPhysicalAddress
        );
    }
    // Function to get the list of service provider addresses with access
    // Function to get the list of service provider addresses with access for the current user
    function getUserAccessList() external view returns (address[] memory) {
        require(users[msg.sender].isUserSet, "User not found");

        address[] memory accessList = new address[](serviceProvidersCount);
        uint256 count = 0;

        for (uint256 i = 0; i < serviceProvidersCount; i++) {
            address serviceProviderAddress = serviceProvidersByIndex(i);
            if (users[msg.sender].userAccessList[serviceProviderAddress]) {
                accessList[count] = serviceProviderAddress;
                count++;
            }
        }

        // Resize the array to the actual count
        assembly {
            mstore(accessList, count)
        }

        return accessList;
    }

    // Helper function to get a registered service provider address by index
    function serviceProvidersByIndex(uint256 index) public view returns (address) {
        require(index < serviceProvidersCount, "Index out of bounds");
        
        uint256 count = 0;
        for (uint256 i = 0; i < serviceProviderAddresses.length; i++) {
            address serviceProviderAddress = serviceProviderAddresses[i];
            if (serviceProviders[serviceProviderAddress].isRegistered) {
                if (count == index) {
                    return serviceProviderAddress;
                }
                count++;
            }
        }
        
        revert("Service provider not found");
    }

    // Function to allow a user to provide details to a service provider
    function provideDetails(address _serviceProviderAddress) external view returns (
        string memory user_FirstName,
        string memory user_MiddleName,
        string memory user_LastName,
        string memory user_Email,
        string memory user_dob,
        string memory user_pno,
        string memory userPhysicalAddress
    ) {
        require(users[msg.sender].isUserSet, "User not found");
        require(serviceProviders[_serviceProviderAddress].isRegistered, "Service Provider not registered");
        require(users[msg.sender].userAccessList[_serviceProviderAddress], "Access denied");

        User storage user = users[msg.sender];
        return (
            user.user_FirstName,
            user.user_MiddleName,
            user.user_LastName,
            user.user_Email,
            user.user_dob,
            user.user_pno,
            user.userPhysicalAddress
        );
    }


}
// 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512