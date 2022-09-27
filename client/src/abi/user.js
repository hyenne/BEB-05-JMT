const USER = {
  "contractName": "MapleUser",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokenContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_nftContractAddress",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_itemContractAddress",
          "type": "address"
        },
        {
          "internalType": "address payable",
          "name": "_treasuryWallet",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserDeleated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserMatching",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "charId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "weaponId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "userId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "UserUpdated",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_charId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_weaponId",
          "type": "uint256"
        }
      ],
      "name": "signUp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_charId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_userId",
          "type": "uint256"
        }
      ],
      "name": "updateChar",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_weaponId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_userId",
          "type": "uint256"
        }
      ],
      "name": "updateWeapon",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "matchUser",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "charToken",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "weaponToken",
              "type": "tuple"
            },
            {
              "internalType": "address payable",
              "name": "user",
              "type": "address"
            }
          ],
          "internalType": "struct MapleUser.UserInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "fetchUsers",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "charToken",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "contractAddr",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "tokenId",
                  "type": "uint256"
                }
              ],
              "internalType": "struct MapleUser.Token",
              "name": "weaponToken",
              "type": "tuple"
            },
            {
              "internalType": "address payable",
              "name": "user",
              "type": "address"
            }
          ],
          "internalType": "struct MapleUser.UserInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC1155BatchReceived",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "name": "onERC721Received",
      "outputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.17+commit.8df45f5f\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokenContractAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_nftContractAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_itemContractAddress\",\"type\":\"address\"},{\"internalType\":\"address payable\",\"name\":\"_treasuryWallet\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserDeleated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserMatching\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"charId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"weaponId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"UserUpdated\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"fetchUsers\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"charToken\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"weaponToken\",\"type\":\"tuple\"},{\"internalType\":\"address payable\",\"name\":\"user\",\"type\":\"address\"}],\"internalType\":\"struct MapleUser.UserInfo[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_user\",\"type\":\"address\"}],\"name\":\"matchUser\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"userId\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"charToken\",\"type\":\"tuple\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"contractAddr\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"internalType\":\"struct MapleUser.Token\",\"name\":\"weaponToken\",\"type\":\"tuple\"},{\"internalType\":\"address payable\",\"name\":\"user\",\"type\":\"address\"}],\"internalType\":\"struct MapleUser.UserInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155BatchReceived\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC1155Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_charId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_weaponId\",\"type\":\"uint256\"}],\"name\":\"signUp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_charId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_userId\",\"type\":\"uint256\"}],\"name\":\"updateChar\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_weaponId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_userId\",\"type\":\"uint256\"}],\"name\":\"updateWeapon\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/MapleUser.sol\":\"MapleUser\"},\"evmVersion\":\"berlin\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":1000},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/security/Pausable.sol\":{\"keccak256\":\"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004\",\"dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B\"]},\"@openzeppelin/contracts/security/ReentrancyGuard.sol\":{\"keccak256\":\"0x0e9621f60b2faabe65549f7ed0f24e8853a45c1b7990d47e8160e523683f3935\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://287a2f8d5814dd0f05f22b740f18ca8321acc21c9bd03a6cb2203ea626e2f3f2\",\"dweb:/ipfs/QmZRQv9iuwU817VuqkA2WweiaibKii69x9QxYBBEfbNEud\"]},\"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\":{\"keccak256\":\"0x447a21c87433c0f11252912313a96f3454629ef88cca7a4eefbb283b3ec409f9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://67d35750fb5ced798b82b8ab085eb5f71529b0d4f72152d182b5bebdc770b20d\",\"dweb:/ipfs/QmUqmyzRZxaLvSXig87HFZgiUxv9ivc2VqfAbxEw7rx32d\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155.sol\":{\"keccak256\":\"0x6392f2cfe3a5ee802227fe7a2dfd47096d881aec89bddd214b35c5b46d3cd941\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd9c47a375639888e726a99da718890ba16d17d7ad9eacb0ccc892d46d1b3ee0\",\"dweb:/ipfs/Qmb41W5RUjy2sWg49A2rMnxekSeEk6SvGyJL5tyCCSr7un\"]},\"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\":{\"keccak256\":\"0xeb373f1fdc7b755c6a750123a9b9e3a8a02c1470042fd6505d875000a80bde0b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0e28648f994abf1d6bc345644a361cc0b7efa544f8bc0c8ec26011fed85a91ec\",\"dweb:/ipfs/QmVVE7AiRjKaQYYji7TkjmTeVzGpNmms5eoxqTCfvvpj6D\"]},\"@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol\":{\"keccak256\":\"0xa66d18b9a85458d28fc3304717964502ae36f7f8a2ff35bc83f6f85d74b03574\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e46c80ea068989111d6103e5521223f9ef337e93de76deed8b03f75c6f7b2797\",\"dweb:/ipfs/QmNoSE6knNfFncdDDLTb3fGR6oSQty1srG96Vsx3E9wQdw\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x24b04b8aacaaf1a4a0719117b29c9c3647b1f479c5ac2a60f5ff1bb6d839c238\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://43e46da9d9f49741ecd876a269e71bc7494058d7a8e9478429998adb5bc3eaa0\",\"dweb:/ipfs/QmUtp4cqzf22C5rJ76AabKADquGWcjsc33yjYXxXC4sDvy\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a7d5b1ef5d8d5889ad2ed89d8619c09383b80b72ab226e0fe7bde1636481e34\",\"dweb:/ipfs/QmebXWgtEfumQGBdVeM6c71McLixYXQP5Bk6kKXuoY4Bmr\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea\",\"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f\",\"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487\",\"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xd15c3e400531f00203839159b2b8e7209c5158b35618f570c695b7e47f12e9f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b600b852e0597aa69989cc263111f02097e2827edc1bdc70306303e3af5e9929\",\"dweb:/ipfs/QmU4WfM28A1nDqghuuGeFmN3CnVrk6opWtiF65K4vhFPeC\"]},\"@uniswap/lib/contracts/libraries/Babylonian.sol\":{\"keccak256\":\"0xe20fc48e3575b4a2932e5d2dd53b6742e1ca96f652bd41038cb89d7f5d49a096\",\"urls\":[\"bzz-raw://6ba298d8e592d39960eabc2328b7d4a01ad6cf8b06366adc3ef0133d3b196a9f\",\"dweb:/ipfs/QmQgrNaHssJ8XVsPUCMHpyYRFLbBqNrumaoFgXHWdDiTyy\"]},\"project:/contracts/JMToken.sol\":{\"keccak256\":\"0x6d46ba35a03980a62eb23b06bc1c9b4c381fb5cec22d24e22ef99187254378c3\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://89f07d0c627d6a08242969b011154e7620ff962753b147e64dc3b0870832db30\",\"dweb:/ipfs/Qmcdew5EtewTCyojfBihLYMB1Lge8Si9PSugNDyiofp1HY\"]},\"project:/contracts/LPT.sol\":{\"keccak256\":\"0xed736abaceb3ae48c617e3f658e9b025d5b61ef8df551970899895432b0ec7b6\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://ad6919c26ab33a0f95936b6de5c1267e1a4ce2d41ef609c72be2ea63e39cf275\",\"dweb:/ipfs/QmVMZpeSSxWUxc9SME2pgQ3xwazzvdjRYGxF7sfMWGspwn\"]},\"project:/contracts/LiquidityPool.sol\":{\"keccak256\":\"0x02add59a18b8f9012f2043575b93d04fde563e3b940ccf50b5358e1cbe9e6ebd\",\"license\":\"Unlicense\",\"urls\":[\"bzz-raw://feb1b5de36d206ec0be059e8e5110936a9a5e13f73b0cb375b3a35e87819ebd0\",\"dweb:/ipfs/QmSX53o3uqjeSaaDofNKswHREGfbf13CXXfnsxye1yHF68\"]},\"project:/contracts/MapleUser.sol\":{\"keccak256\":\"0xdd0b02462a95dde94ea43150e5aa35fdaea90af7a214cb7e6057870a0aa07211\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://77e1a15d0097f5a598d8f62e88dd65d7ab44fea315f77c50b7239bf300690ea6\",\"dweb:/ipfs/QmPY6npYAZn644PiRdx1mDN1auu8tLDyJm4Z1uGGbSxQ9H\"]},\"project:/contracts/VJMToken.sol\":{\"keccak256\":\"0xe2f8a326fd1fbe8e2bf0e7365ad261285fde71804fe77694ce986d47c106f061\",\"license\":\"GPL-3.0-only\",\"urls\":[\"bzz-raw://f6ee599ebeff106e2eb9d3a6b0c01915cfc6f76e0916b4215e9c80c5c992e475\",\"dweb:/ipfs/QmXz1MZL3nGq7C8o1JW57rgYr6Z4iDV4Kba279dw4Smt4M\"]}},\"version\":1}",
  "bytecode": "0x6080604052670de0b6b3a76400006002553480156200001d57600080fd5b506040516200134f3803806200134f8339810160408190526200004091620001aa565b6200004b336200009b565b6200005684620000eb565b50600580546001600160a01b039485166001600160a01b0319918216179091556006805493851693821693909317909255600480549190931691161790555062000212565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620000f762000130565b6001600160a01b0382166200010b57600080fd5b50600380546001600160a01b0383166001600160a01b03199091161790556001919050565b6000546001600160a01b031633146200018f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b6001600160a01b0381168114620001a757600080fd5b50565b60008060008060808587031215620001c157600080fd5b8451620001ce8162000191565b6020860151909450620001e18162000191565b6040860151909350620001f48162000191565b6060860151909250620002078162000191565b939692955090935050565b61112d80620002226000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c8063aeeda6bf11610081578063da56ef3a1161005b578063da56ef3a146101e6578063f23a6e6114610206578063f2fde38b1461023e57600080fd5b8063aeeda6bf14610186578063bc197c8114610199578063bfcad433146101d157600080fd5b80635c7dec1b116100b25780635c7dec1b14610150578063715018a6146101635780638da5cb5b1461016b57600080fd5b8063150b7a02146100ce57806336b181651461013b575b600080fd5b6101056100dc366004610ce1565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b61014e610149366004610d4d565b610251565b005b61014e61015e366004610d4d565b6103a2565b61014e6104d5565b6000546040516001600160a01b039091168152602001610132565b61014e610194366004610d4d565b6104e9565b6101056101a7366004610def565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6101d96107ae565b6040516101329190610e9d565b6101f96101f4366004610f3f565b6108e2565b6040516101329190610f63565b610105610214366004610fcb565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b61014e61024c366004610f3f565b610a5e565b600654604051627eeac760e11b8152336004820152602481018490526001600160a01b039091169062fdd58e90604401602060405180830381865afa15801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c29190611034565b60000361033c5760405162461bcd60e51b815260206004820152602660248201527f6f6e6c7920776561706f6e206f776e6572732063616e2075706461746520757360448201527f6572496e666f000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600081815260076020908152604091829020600481018590556002015482519081529081018490529081018290523360608201527fcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b906080015b60405180910390a15050565b6005546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa1580156103eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040f919061104d565b6001600160a01b0316336001600160a01b0316146104795760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b6064820152608401610333565b60008181526007602090815260409182902060028101859055600401548251858152918201529081018290523360608201527fcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b90608001610396565b6104dd610aee565b6104e76000610b48565b565b6005546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa158015610532573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610556919061104d565b6001600160a01b0316336001600160a01b0316146105c05760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b6064820152608401610333565b600654604051627eeac760e11b8152336004820152602481018390526001600160a01b039091169062fdd58e90604401602060405180830381865afa15801561060d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106319190611034565b6000036106805760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c7920776561706f6e206f776e6572732063616e207369676e20757000006044820152606401610333565b61068e600180546001019055565b600061069960015490565b604080516080808201835283825282518084018452600580546001600160a01b03908116835260208084018b905280860193845286518088018852600654831681528082018b905286880190815233606080890182815260008c8152600786528b902099518a559651805160018b01805491881673ffffffffffffffffffffffffffffffffffffffff199283161790559085015160028b01559251805160038b01805491881691861691909117905584015160048a0155955197909401805497909316961695909517905584518981529384018890529383018590528201929092529192507fb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d910160405180910390a1505050565b606060006107bb60015490565b905060008167ffffffffffffffff8111156107d8576107d8610c2a565b60405190808252806020026020018201604052801561081157816020015b6107fe610ba5565b8152602001906001900390816107f65790505b50905060015b8281116108db5760008181526007602090815260408083205480845292819020815160808101835281548152825180840184526001808401546001600160a01b03908116835260028501548388015283870192909252845180860186526003850154831681526004850154968101969096529382019490945260058201549093166060840152919085906108ab9086611080565b815181106108bb576108bb611093565b6020026020010181905250505080806108d3906110a9565b915050610817565b5092915050565b6108ea610ba5565b60015460010361093c5760405162461bcd60e51b815260206004820152601b60248201527f796f752061726520746865206f6e6c79206f6e6520706c6179657200000000006044820152606401610333565b600061094760015490565b90506000814260405160200161095f91815260200190565b6040516020818303038152906040528051906020012060001c61098291906110c2565b90506001600160a01b0384166007600061099d8460016110e4565b81526020810191909152604001600020600501546001600160a01b031614610a4d5760006007816109cf8460016110e4565b815260208082019290925260409081016000208151608081018352815481528251808401845260018301546001600160a01b0390811682526002840154828701528286019190915283518085018552600384015482168152600484015495810195909552928101939093526005015416606082015295945050505050565b610a56846108e2565b949350505050565b610a66610aee565b6001600160a01b038116610ae25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610333565b610aeb81610b48565b50565b6000546001600160a01b031633146104e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610333565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051806080016040528060008152602001610bdd604051806040016040528060006001600160a01b03168152602001600081525090565b8152602001610c08604051806040016040528060006001600160a01b03168152602001600081525090565b8152600060209091015290565b6001600160a01b0381168114610aeb57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610c6957610c69610c2a565b604052919050565b600082601f830112610c8257600080fd5b813567ffffffffffffffff811115610c9c57610c9c610c2a565b610caf601f8201601f1916602001610c40565b818152846020838601011115610cc457600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215610cf757600080fd5b8435610d0281610c15565b93506020850135610d1281610c15565b925060408501359150606085013567ffffffffffffffff811115610d3557600080fd5b610d4187828801610c71565b91505092959194509250565b60008060408385031215610d6057600080fd5b50508035926020909101359150565b600082601f830112610d8057600080fd5b8135602067ffffffffffffffff821115610d9c57610d9c610c2a565b8160051b610dab828201610c40565b9283528481018201928281019087851115610dc557600080fd5b83870192505b84831015610de457823582529183019190830190610dcb565b979650505050505050565b600080600080600060a08688031215610e0757600080fd5b8535610e1281610c15565b94506020860135610e2281610c15565b9350604086013567ffffffffffffffff80821115610e3f57600080fd5b610e4b89838a01610d6f565b94506060880135915080821115610e6157600080fd5b610e6d89838a01610d6f565b93506080880135915080821115610e8357600080fd5b50610e9088828901610c71565b9150509295509295909350565b6020808252825182820181905260009190848201906040850190845b81811015610f3357610f208385518051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b9284019260c09290920191600101610eb9565b50909695505050505050565b600060208284031215610f5157600080fd5b8135610f5c81610c15565b9392505050565b60c08101610fc582848051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b92915050565b600080600080600060a08688031215610fe357600080fd5b8535610fee81610c15565b94506020860135610ffe81610c15565b93506040860135925060608601359150608086013567ffffffffffffffff81111561102857600080fd5b610e9088828901610c71565b60006020828403121561104657600080fd5b5051919050565b60006020828403121561105f57600080fd5b8151610f5c81610c15565b634e487b7160e01b600052601160045260246000fd5b81810381811115610fc557610fc561106a565b634e487b7160e01b600052603260045260246000fd5b6000600182016110bb576110bb61106a565b5060010190565b6000826110df57634e487b7160e01b600052601260045260246000fd5b500690565b80820180821115610fc557610fc561106a56fea2646970667358221220eb8f81c2e197e034a1063c8a3a6851fc0b4ce250e73749e2f939c030e77b69a964736f6c63430008110033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100c95760003560e01c8063aeeda6bf11610081578063da56ef3a1161005b578063da56ef3a146101e6578063f23a6e6114610206578063f2fde38b1461023e57600080fd5b8063aeeda6bf14610186578063bc197c8114610199578063bfcad433146101d157600080fd5b80635c7dec1b116100b25780635c7dec1b14610150578063715018a6146101635780638da5cb5b1461016b57600080fd5b8063150b7a02146100ce57806336b181651461013b575b600080fd5b6101056100dc366004610ce1565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b61014e610149366004610d4d565b610251565b005b61014e61015e366004610d4d565b6103a2565b61014e6104d5565b6000546040516001600160a01b039091168152602001610132565b61014e610194366004610d4d565b6104e9565b6101056101a7366004610def565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6101d96107ae565b6040516101329190610e9d565b6101f96101f4366004610f3f565b6108e2565b6040516101329190610f63565b610105610214366004610fcb565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b61014e61024c366004610f3f565b610a5e565b600654604051627eeac760e11b8152336004820152602481018490526001600160a01b039091169062fdd58e90604401602060405180830381865afa15801561029e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c29190611034565b60000361033c5760405162461bcd60e51b815260206004820152602660248201527f6f6e6c7920776561706f6e206f776e6572732063616e2075706461746520757360448201527f6572496e666f000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600081815260076020908152604091829020600481018590556002015482519081529081018490529081018290523360608201527fcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b906080015b60405180910390a15050565b6005546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa1580156103eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040f919061104d565b6001600160a01b0316336001600160a01b0316146104795760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b6064820152608401610333565b60008181526007602090815260409182902060028101859055600401548251858152918201529081018290523360608201527fcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b90608001610396565b6104dd610aee565b6104e76000610b48565b565b6005546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa158015610532573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610556919061104d565b6001600160a01b0316336001600160a01b0316146105c05760405162461bcd60e51b815260206004820152602160248201527f6f6e6c7920636861726163746572206f776e6572732063616e207369676e20756044820152600760fc1b6064820152608401610333565b600654604051627eeac760e11b8152336004820152602481018390526001600160a01b039091169062fdd58e90604401602060405180830381865afa15801561060d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106319190611034565b6000036106805760405162461bcd60e51b815260206004820152601e60248201527f6f6e6c7920776561706f6e206f776e6572732063616e207369676e20757000006044820152606401610333565b61068e600180546001019055565b600061069960015490565b604080516080808201835283825282518084018452600580546001600160a01b03908116835260208084018b905280860193845286518088018852600654831681528082018b905286880190815233606080890182815260008c8152600786528b902099518a559651805160018b01805491881673ffffffffffffffffffffffffffffffffffffffff199283161790559085015160028b01559251805160038b01805491881691861691909117905584015160048a0155955197909401805497909316961695909517905584518981529384018890529383018590528201929092529192507fb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d910160405180910390a1505050565b606060006107bb60015490565b905060008167ffffffffffffffff8111156107d8576107d8610c2a565b60405190808252806020026020018201604052801561081157816020015b6107fe610ba5565b8152602001906001900390816107f65790505b50905060015b8281116108db5760008181526007602090815260408083205480845292819020815160808101835281548152825180840184526001808401546001600160a01b03908116835260028501548388015283870192909252845180860186526003850154831681526004850154968101969096529382019490945260058201549093166060840152919085906108ab9086611080565b815181106108bb576108bb611093565b6020026020010181905250505080806108d3906110a9565b915050610817565b5092915050565b6108ea610ba5565b60015460010361093c5760405162461bcd60e51b815260206004820152601b60248201527f796f752061726520746865206f6e6c79206f6e6520706c6179657200000000006044820152606401610333565b600061094760015490565b90506000814260405160200161095f91815260200190565b6040516020818303038152906040528051906020012060001c61098291906110c2565b90506001600160a01b0384166007600061099d8460016110e4565b81526020810191909152604001600020600501546001600160a01b031614610a4d5760006007816109cf8460016110e4565b815260208082019290925260409081016000208151608081018352815481528251808401845260018301546001600160a01b0390811682526002840154828701528286019190915283518085018552600384015482168152600484015495810195909552928101939093526005015416606082015295945050505050565b610a56846108e2565b949350505050565b610a66610aee565b6001600160a01b038116610ae25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610333565b610aeb81610b48565b50565b6000546001600160a01b031633146104e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610333565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b604051806080016040528060008152602001610bdd604051806040016040528060006001600160a01b03168152602001600081525090565b8152602001610c08604051806040016040528060006001600160a01b03168152602001600081525090565b8152600060209091015290565b6001600160a01b0381168114610aeb57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610c6957610c69610c2a565b604052919050565b600082601f830112610c8257600080fd5b813567ffffffffffffffff811115610c9c57610c9c610c2a565b610caf601f8201601f1916602001610c40565b818152846020838601011115610cc457600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215610cf757600080fd5b8435610d0281610c15565b93506020850135610d1281610c15565b925060408501359150606085013567ffffffffffffffff811115610d3557600080fd5b610d4187828801610c71565b91505092959194509250565b60008060408385031215610d6057600080fd5b50508035926020909101359150565b600082601f830112610d8057600080fd5b8135602067ffffffffffffffff821115610d9c57610d9c610c2a565b8160051b610dab828201610c40565b9283528481018201928281019087851115610dc557600080fd5b83870192505b84831015610de457823582529183019190830190610dcb565b979650505050505050565b600080600080600060a08688031215610e0757600080fd5b8535610e1281610c15565b94506020860135610e2281610c15565b9350604086013567ffffffffffffffff80821115610e3f57600080fd5b610e4b89838a01610d6f565b94506060880135915080821115610e6157600080fd5b610e6d89838a01610d6f565b93506080880135915080821115610e8357600080fd5b50610e9088828901610c71565b9150509295509295909350565b6020808252825182820181905260009190848201906040850190845b81811015610f3357610f208385518051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b9284019260c09290920191600101610eb9565b50909695505050505050565b600060208284031215610f5157600080fd5b8135610f5c81610c15565b9392505050565b60c08101610fc582848051825260208082015180516001600160a01b03168285015290810151604084015250604081015180516001600160a01b031660608401526020810151608084015250606001516001600160a01b031660a09190910152565b92915050565b600080600080600060a08688031215610fe357600080fd5b8535610fee81610c15565b94506020860135610ffe81610c15565b93506040860135925060608601359150608086013567ffffffffffffffff81111561102857600080fd5b610e9088828901610c71565b60006020828403121561104657600080fd5b5051919050565b60006020828403121561105f57600080fd5b8151610f5c81610c15565b634e487b7160e01b600052601160045260246000fd5b81810381811115610fc557610fc561106a565b634e487b7160e01b600052603260045260246000fd5b6000600182016110bb576110bb61106a565b5060010190565b6000826110df57634e487b7160e01b600052601260045260246000fd5b500690565b80820180821115610fc557610fc561106a56fea2646970667358221220eb8f81c2e197e034a1063c8a3a6851fc0b4ce250e73749e2f939c030e77b69a964736f6c63430008110033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:1175:27",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:27",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:86:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "123:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "132:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "135:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "125:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "125:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "125:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "82:5:27"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "93:5:27"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "108:3:27",
                                        "type": "",
                                        "value": "160"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "113:1:27",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "shl",
                                      "nodeType": "YulIdentifier",
                                      "src": "104:3:27"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "104:11:27"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "117:1:27",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "sub",
                                  "nodeType": "YulIdentifier",
                                  "src": "100:3:27"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "100:19:27"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "89:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "89:31:27"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "79:2:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "79:42:27"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "72:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:50:27"
                  },
                  "nodeType": "YulIf",
                  "src": "69:70:27"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "48:5:27",
                "type": ""
              }
            ],
            "src": "14:131:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "290:522:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "337:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "346:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "349:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "339:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "339:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "339:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "311:7:27"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "320:9:27"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "307:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "307:23:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "332:3:27",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "303:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "303:33:27"
                  },
                  "nodeType": "YulIf",
                  "src": "300:53:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "362:29:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "381:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "375:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "375:16:27"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "366:5:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "425:5:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "400:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "400:31:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "400:31:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "440:15:27",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "450:5:27"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "440:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "464:40:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "489:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "500:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "485:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "485:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "479:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "479:25:27"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "468:7:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "538:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "513:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "513:33:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "513:33:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "555:17:27",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "565:7:27"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "555:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "581:40:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "606:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "617:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "602:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "602:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "596:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "596:25:27"
                  },
                  "variables": [
                    {
                      "name": "value_2",
                      "nodeType": "YulTypedName",
                      "src": "585:7:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_2",
                        "nodeType": "YulIdentifier",
                        "src": "655:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "630:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "630:33:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "630:33:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "672:17:27",
                  "value": {
                    "name": "value_2",
                    "nodeType": "YulIdentifier",
                    "src": "682:7:27"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "672:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "698:40:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "723:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "734:2:27",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "719:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "719:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "713:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "713:25:27"
                  },
                  "variables": [
                    {
                      "name": "value_3",
                      "nodeType": "YulTypedName",
                      "src": "702:7:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_3",
                        "nodeType": "YulIdentifier",
                        "src": "772:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "747:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "747:33:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "747:33:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "789:17:27",
                  "value": {
                    "name": "value_3",
                    "nodeType": "YulIdentifier",
                    "src": "799:7:27"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "789:6:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_addresst_address_payable_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "232:9:27",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "243:7:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "255:6:27",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "263:6:27",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "271:6:27",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "279:6:27",
                "type": ""
              }
            ],
            "src": "150:662:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "991:182:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1008:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1019:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1001:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1001:21:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1001:21:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1042:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1053:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1038:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1038:18:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1058:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1031:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1031:30:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1031:30:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1081:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1092:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1077:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1077:18:27"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "1097:34:27",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1070:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1070:62:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1070:62:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1141:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1153:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1164:2:27",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1149:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1149:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1141:4:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "968:9:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "982:4:27",
                "type": ""
              }
            ],
            "src": "817:356:27"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, sub(shl(160, 1), 1)))) { revert(0, 0) }\n    }\n    function abi_decode_tuple_t_addresst_addresst_addresst_address_payable_fromMemory(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := mload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        let value_2 := mload(add(headStart, 64))\n        validator_revert_address(value_2)\n        value2 := value_2\n        let value_3 := mload(add(headStart, 96))\n        validator_revert_address(value_3)\n        value3 := value_3\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 27,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:11871:27",
        "statements": [
          {
            "nodeType": "YulBlock",
            "src": "6:3:27",
            "statements": []
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "59:109:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "146:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "155:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "158:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "148:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "148:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "148:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "82:5:27"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "93:5:27"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "100:42:27",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "89:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "89:54:27"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "79:2:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "79:65:27"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "72:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "72:73:27"
                  },
                  "nodeType": "YulIf",
                  "src": "69:93:27"
                }
              ]
            },
            "name": "validator_revert_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "48:5:27",
                "type": ""
              }
            ],
            "src": "14:154:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "205:152:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "222:1:27",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "225:77:27",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "215:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "215:88:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "215:88:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "319:1:27",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "322:4:27",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "312:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "312:15:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "312:15:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "343:1:27",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "346:4:27",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "336:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "336:15:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "336:15:27"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "173:184:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "407:230:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "417:19:27",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "433:2:27",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "427:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "427:9:27"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "417:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "445:58:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "467:6:27"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "size",
                                "nodeType": "YulIdentifier",
                                "src": "483:4:27"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "489:2:27",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "479:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "479:13:27"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "498:2:27",
                                "type": "",
                                "value": "31"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "494:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "494:7:27"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "475:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "475:27:27"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "463:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "463:40:27"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "449:10:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "578:22:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "580:16:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "580:18:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "580:18:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "521:10:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "533:18:27",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "518:2:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "518:34:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "557:10:27"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "569:6:27"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "554:2:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "554:22:27"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "515:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "515:62:27"
                  },
                  "nodeType": "YulIf",
                  "src": "512:88:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "616:2:27",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "620:10:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "609:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "609:22:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "609:22:27"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "387:4:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "396:6:27",
                "type": ""
              }
            ],
            "src": "362:275:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "694:478:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "743:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "752:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "755:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "745:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "745:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "745:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "722:6:27"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "730:4:27",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "718:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "718:17:27"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "737:3:27"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "714:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "714:27:27"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "707:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "707:35:27"
                  },
                  "nodeType": "YulIf",
                  "src": "704:55:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "768:30:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "791:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "778:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "778:20:27"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "772:2:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "837:22:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "839:16:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "839:18:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "839:18:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "813:2:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "817:18:27",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "810:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "810:26:27"
                  },
                  "nodeType": "YulIf",
                  "src": "807:52:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "868:70:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "_1",
                                    "nodeType": "YulIdentifier",
                                    "src": "911:2:27"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "915:4:27",
                                    "type": "",
                                    "value": "0x1f"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "907:3:27"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "907:13:27"
                              },
                              {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "926:2:27",
                                    "type": "",
                                    "value": "31"
                                  }
                                ],
                                "functionName": {
                                  "name": "not",
                                  "nodeType": "YulIdentifier",
                                  "src": "922:3:27"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "922:7:27"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "903:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "903:27:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "932:4:27",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "899:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "899:38:27"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "883:15:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "883:55:27"
                  },
                  "variables": [
                    {
                      "name": "array_1",
                      "nodeType": "YulTypedName",
                      "src": "872:7:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array_1",
                        "nodeType": "YulIdentifier",
                        "src": "954:7:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "963:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "947:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "947:19:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "947:19:27"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1014:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1023:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1026:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1016:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1016:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1016:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "989:6:27"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "997:2:27"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "985:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "985:15:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1002:4:27",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "981:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "981:26:27"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "1009:3:27"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "978:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "978:35:27"
                  },
                  "nodeType": "YulIf",
                  "src": "975:55:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "array_1",
                            "nodeType": "YulIdentifier",
                            "src": "1056:7:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1065:4:27",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1052:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1052:18:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1076:6:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1084:4:27",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1072:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1072:17:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "1091:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "1039:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1039:55:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1039:55:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "array_1",
                                "nodeType": "YulIdentifier",
                                "src": "1118:7:27"
                              },
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "1127:2:27"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1114:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1114:16:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1132:4:27",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1110:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1110:27:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1139:1:27",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1103:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1103:38:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1103:38:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1150:16:27",
                  "value": {
                    "name": "array_1",
                    "nodeType": "YulIdentifier",
                    "src": "1159:7:27"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "1150:5:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_bytes",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "668:6:27",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "676:3:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "684:5:27",
                "type": ""
              }
            ],
            "src": "642:530:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1307:535:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1354:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1363:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1366:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1356:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1356:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1356:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1328:7:27"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1337:9:27"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1324:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1324:23:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1349:3:27",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1320:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1320:33:27"
                  },
                  "nodeType": "YulIf",
                  "src": "1317:53:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1379:36:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1405:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1392:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1392:23:27"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1383:5:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1449:5:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1424:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1424:31:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1424:31:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1464:15:27",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1474:5:27"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "1464:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1488:47:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1520:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1531:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1516:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1516:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1503:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1503:32:27"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "1492:7:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "1569:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "1544:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1544:33:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1544:33:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1586:17:27",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "1596:7:27"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "1586:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1612:42:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1639:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1650:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1635:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1635:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1622:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1622:32:27"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "1612:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1663:46:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1694:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1705:2:27",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1690:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1690:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1677:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1677:32:27"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "1667:6:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1752:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1761:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1764:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1754:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1754:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1754:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1724:6:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1732:18:27",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1721:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1721:30:27"
                  },
                  "nodeType": "YulIf",
                  "src": "1718:50:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1777:59:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1808:9:27"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "1819:6:27"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1804:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1804:22:27"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "1828:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "1787:16:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1787:49:27"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "1777:6:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1249:9:27",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1260:7:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1272:6:27",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1280:6:27",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1288:6:27",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "1296:6:27",
                "type": ""
              }
            ],
            "src": "1177:665:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1946:149:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1956:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1968:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1979:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1964:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1964:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1956:4:27"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1998:9:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2013:6:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2021:66:27",
                            "type": "",
                            "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2009:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2009:79:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1991:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1991:98:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1991:98:27"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1915:9:27",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1926:6:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1937:4:27",
                "type": ""
              }
            ],
            "src": "1847:248:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2187:161:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2233:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2242:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2245:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2235:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2235:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2235:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2208:7:27"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2217:9:27"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2204:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2204:23:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2229:2:27",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2200:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2200:32:27"
                  },
                  "nodeType": "YulIf",
                  "src": "2197:52:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2258:33:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2281:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2268:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2268:23:27"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "2258:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2300:42:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2327:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2338:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2323:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2323:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2310:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2310:32:27"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "2300:6:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2145:9:27",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2156:7:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2168:6:27",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2176:6:27",
                "type": ""
              }
            ],
            "src": "2100:248:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2454:125:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2464:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2476:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2487:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2472:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2472:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2464:4:27"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2506:9:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2521:6:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2529:42:27",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2517:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2517:55:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2499:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2499:74:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2499:74:27"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2423:9:27",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2434:6:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2445:4:27",
                "type": ""
              }
            ],
            "src": "2353:226:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2648:648:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2697:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2706:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2709:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2699:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2699:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2699:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2676:6:27"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2684:4:27",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2672:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2672:17:27"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "2691:3:27"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "2668:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2668:27:27"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "2661:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2661:35:27"
                  },
                  "nodeType": "YulIf",
                  "src": "2658:55:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2722:30:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2745:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "2732:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2732:20:27"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "2726:2:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2761:14:27",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2771:4:27",
                    "type": "",
                    "value": "0x20"
                  },
                  "variables": [
                    {
                      "name": "_2",
                      "nodeType": "YulTypedName",
                      "src": "2765:2:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2814:22:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "2816:16:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2816:18:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2816:18:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2790:2:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2794:18:27",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2787:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2787:26:27"
                  },
                  "nodeType": "YulIf",
                  "src": "2784:52:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2845:20:27",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2859:1:27",
                        "type": "",
                        "value": "5"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2862:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "2855:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2855:10:27"
                  },
                  "variables": [
                    {
                      "name": "_3",
                      "nodeType": "YulTypedName",
                      "src": "2849:2:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2874:39:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "2905:2:27"
                          },
                          {
                            "name": "_2",
                            "nodeType": "YulIdentifier",
                            "src": "2909:2:27"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2901:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2901:11:27"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "2885:15:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2885:28:27"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "2878:3:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2922:16:27",
                  "value": {
                    "name": "dst",
                    "nodeType": "YulIdentifier",
                    "src": "2935:3:27"
                  },
                  "variables": [
                    {
                      "name": "dst_1",
                      "nodeType": "YulTypedName",
                      "src": "2926:5:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "2954:3:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "2959:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2947:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2947:15:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2947:15:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2971:19:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "2982:3:27"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "2987:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2978:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2978:12:27"
                  },
                  "variableNames": [
                    {
                      "name": "dst",
                      "nodeType": "YulIdentifier",
                      "src": "2971:3:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2999:38:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3021:6:27"
                          },
                          {
                            "name": "_3",
                            "nodeType": "YulIdentifier",
                            "src": "3029:2:27"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3017:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3017:15:27"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3034:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3013:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3013:24:27"
                  },
                  "variables": [
                    {
                      "name": "srcEnd",
                      "nodeType": "YulTypedName",
                      "src": "3003:6:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3065:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3074:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3077:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3067:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3067:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3067:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "srcEnd",
                        "nodeType": "YulIdentifier",
                        "src": "3052:6:27"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3060:3:27"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3049:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3049:15:27"
                  },
                  "nodeType": "YulIf",
                  "src": "3046:35:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3090:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3105:6:27"
                      },
                      {
                        "name": "_2",
                        "nodeType": "YulIdentifier",
                        "src": "3113:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3101:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3101:15:27"
                  },
                  "variables": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "3094:3:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3181:86:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "3202:3:27"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "src",
                                  "nodeType": "YulIdentifier",
                                  "src": "3220:3:27"
                                }
                              ],
                              "functionName": {
                                "name": "calldataload",
                                "nodeType": "YulIdentifier",
                                "src": "3207:12:27"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3207:17:27"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3195:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3195:30:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3195:30:27"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3238:19:27",
                        "value": {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "3249:3:27"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "3254:2:27"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3245:3:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3245:12:27"
                        },
                        "variableNames": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "3238:3:27"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "3136:3:27"
                      },
                      {
                        "name": "srcEnd",
                        "nodeType": "YulIdentifier",
                        "src": "3141:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "3133:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3133:15:27"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "3149:23:27",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3151:19:27",
                        "value": {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "3162:3:27"
                            },
                            {
                              "name": "_2",
                              "nodeType": "YulIdentifier",
                              "src": "3167:2:27"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3158:3:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3158:12:27"
                        },
                        "variableNames": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "3151:3:27"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "3129:3:27",
                    "statements": []
                  },
                  "src": "3125:142:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3276:14:27",
                  "value": {
                    "name": "dst_1",
                    "nodeType": "YulIdentifier",
                    "src": "3285:5:27"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "3276:5:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_array_uint256_dyn",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2622:6:27",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2630:3:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2638:5:27",
                "type": ""
              }
            ],
            "src": "2584:712:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3498:874:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3545:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3554:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3557:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3547:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3547:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3547:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3519:7:27"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3528:9:27"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3515:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3515:23:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3540:3:27",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3511:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3511:33:27"
                  },
                  "nodeType": "YulIf",
                  "src": "3508:53:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3570:36:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "3596:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3583:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3583:23:27"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3574:5:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3640:5:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "3615:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3615:31:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3615:31:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3655:15:27",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3665:5:27"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "3655:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3679:47:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3711:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3722:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3707:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3707:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3694:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3694:32:27"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "3683:7:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "3760:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "3735:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3735:33:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3735:33:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3777:17:27",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "3787:7:27"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "3777:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3803:46:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3834:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3845:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3830:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3830:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3817:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3817:32:27"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "3807:6:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3858:28:27",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "3868:18:27",
                    "type": "",
                    "value": "0xffffffffffffffff"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "3862:2:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3913:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3922:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3925:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3915:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3915:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3915:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3901:6:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "3909:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3898:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3898:14:27"
                  },
                  "nodeType": "YulIf",
                  "src": "3895:34:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3938:71:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3981:9:27"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3992:6:27"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3977:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3977:22:27"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4001:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_dyn",
                      "nodeType": "YulIdentifier",
                      "src": "3948:28:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3948:61:27"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "3938:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4018:48:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4051:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4062:2:27",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4047:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4047:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4034:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4034:32:27"
                  },
                  "variables": [
                    {
                      "name": "offset_1",
                      "nodeType": "YulTypedName",
                      "src": "4022:8:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4095:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4104:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4107:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4097:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4097:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4097:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_1",
                        "nodeType": "YulIdentifier",
                        "src": "4081:8:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4091:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4078:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4078:16:27"
                  },
                  "nodeType": "YulIf",
                  "src": "4075:36:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4120:73:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4163:9:27"
                          },
                          {
                            "name": "offset_1",
                            "nodeType": "YulIdentifier",
                            "src": "4174:8:27"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4159:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4159:24:27"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4185:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_array_uint256_dyn",
                      "nodeType": "YulIdentifier",
                      "src": "4130:28:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4130:63:27"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "4120:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4202:49:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4235:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4246:3:27",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4231:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4231:19:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4218:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4218:33:27"
                  },
                  "variables": [
                    {
                      "name": "offset_2",
                      "nodeType": "YulTypedName",
                      "src": "4206:8:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4280:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4289:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4292:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4282:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4282:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4282:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset_2",
                        "nodeType": "YulIdentifier",
                        "src": "4266:8:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "4276:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4263:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4263:16:27"
                  },
                  "nodeType": "YulIf",
                  "src": "4260:36:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4305:61:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4336:9:27"
                          },
                          {
                            "name": "offset_2",
                            "nodeType": "YulIdentifier",
                            "src": "4347:8:27"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4332:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4332:24:27"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "4358:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "4315:16:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4315:51:27"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "4305:6:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3432:9:27",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3443:7:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3455:6:27",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "3463:6:27",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "3471:6:27",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "3479:6:27",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "3487:6:27",
                "type": ""
              }
            ],
            "src": "3301:1071:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4426:146:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4443:3:27"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4458:5:27"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "4452:5:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4452:12:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4466:42:27",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4448:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4448:61:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4436:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4436:74:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4436:74:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4530:3:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4535:4:27",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4526:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4526:14:27"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4552:5:27"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4559:4:27",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4548:3:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4548:16:27"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "4542:5:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4542:23:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4519:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4519:47:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4519:47:27"
                }
              ]
            },
            "name": "abi_encode_struct_Token",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4410:5:27",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4417:3:27",
                "type": ""
              }
            ],
            "src": "4377:195:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4629:378:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4646:3:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4657:5:27"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "4651:5:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4651:12:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4639:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4639:25:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4639:25:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4673:43:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4703:5:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4710:4:27",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4699:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4699:16:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4693:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4693:23:27"
                  },
                  "variables": [
                    {
                      "name": "memberValue0",
                      "nodeType": "YulTypedName",
                      "src": "4677:12:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memberValue0",
                        "nodeType": "YulIdentifier",
                        "src": "4749:12:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4767:3:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4772:4:27",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4763:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4763:14:27"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_Token",
                      "nodeType": "YulIdentifier",
                      "src": "4725:23:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4725:53:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4725:53:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4787:45:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4819:5:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4826:4:27",
                            "type": "",
                            "value": "0x40"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4815:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4815:16:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "4809:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4809:23:27"
                  },
                  "variables": [
                    {
                      "name": "memberValue0_1",
                      "nodeType": "YulTypedName",
                      "src": "4791:14:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memberValue0_1",
                        "nodeType": "YulIdentifier",
                        "src": "4865:14:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4885:3:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4890:4:27",
                            "type": "",
                            "value": "0x60"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4881:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4881:14:27"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_Token",
                      "nodeType": "YulIdentifier",
                      "src": "4841:23:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4841:55:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4841:55:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4916:3:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4921:4:27",
                            "type": "",
                            "value": "0xa0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4912:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4912:14:27"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "4942:5:27"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "4949:4:27",
                                    "type": "",
                                    "value": "0x60"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "4938:3:27"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4938:16:27"
                              }
                            ],
                            "functionName": {
                              "name": "mload",
                              "nodeType": "YulIdentifier",
                              "src": "4932:5:27"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4932:23:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4957:42:27",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "4928:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4928:72:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4905:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4905:96:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4905:96:27"
                }
              ]
            },
            "name": "abi_encode_struct_UserInfo",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4613:5:27",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4620:3:27",
                "type": ""
              }
            ],
            "src": "4577:430:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5215:503:27",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5225:12:27",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5235:2:27",
                    "type": "",
                    "value": "32"
                  },
                  "variables": [
                    {
                      "name": "_1",
                      "nodeType": "YulTypedName",
                      "src": "5229:2:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5246:32:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5264:9:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "5275:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5260:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5260:18:27"
                  },
                  "variables": [
                    {
                      "name": "tail_1",
                      "nodeType": "YulTypedName",
                      "src": "5250:6:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5294:9:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "5305:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5287:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5287:21:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5287:21:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5317:17:27",
                  "value": {
                    "name": "tail_1",
                    "nodeType": "YulIdentifier",
                    "src": "5328:6:27"
                  },
                  "variables": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "5321:3:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5343:27:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5363:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "5357:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5357:13:27"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5347:6:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "5386:6:27"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5394:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5379:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5379:22:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5379:22:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5410:25:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5421:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5432:2:27",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5417:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5417:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "5410:3:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5444:29:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5462:6:27"
                      },
                      {
                        "name": "_1",
                        "nodeType": "YulIdentifier",
                        "src": "5470:2:27"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5458:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5458:15:27"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "5448:6:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5482:10:27",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5491:1:27",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "5486:1:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5550:142:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "srcPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "5597:6:27"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "5591:5:27"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5591:13:27"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5606:3:27"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_struct_UserInfo",
                            "nodeType": "YulIdentifier",
                            "src": "5564:26:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5564:46:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5564:46:27"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5623:21:27",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "5634:3:27"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5639:4:27",
                              "type": "",
                              "value": "0xc0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5630:3:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5630:14:27"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "5623:3:27"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5657:25:27",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "5671:6:27"
                            },
                            {
                              "name": "_1",
                              "nodeType": "YulIdentifier",
                              "src": "5679:2:27"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5667:3:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5667:15:27"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "5657:6:27"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "5512:1:27"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5515:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "5509:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5509:13:27"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "5523:18:27",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5525:14:27",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "5534:1:27"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5537:1:27",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5530:3:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5530:9:27"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "5525:1:27"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "5505:3:27",
                    "statements": []
                  },
                  "src": "5501:191:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5701:11:27",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "5709:3:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5701:4:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5184:9:27",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5195:6:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5206:4:27",
                "type": ""
              }
            ],
            "src": "5012:706:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5793:177:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5839:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5848:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5851:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "5841:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5841:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5841:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5814:7:27"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5823:9:27"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5810:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5810:23:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5835:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5806:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5806:32:27"
                  },
                  "nodeType": "YulIf",
                  "src": "5803:52:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5864:36:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5890:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5877:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5877:23:27"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "5868:5:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "5934:5:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "5909:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5909:31:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5909:31:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5949:15:27",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "5959:5:27"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "5949:6:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5759:9:27",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5770:7:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5782:6:27",
                "type": ""
              }
            ],
            "src": "5723:247:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6128:97:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6138:27:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6150:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6161:3:27",
                        "type": "",
                        "value": "192"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6146:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6146:19:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "6138:4:27"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "6201:6:27"
                      },
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6209:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_struct_UserInfo",
                      "nodeType": "YulIdentifier",
                      "src": "6174:26:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6174:45:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6174:45:27"
                }
              ]
            },
            "name": "abi_encode_tuple_t_struct$_UserInfo_$6367_memory_ptr__to_t_struct$_UserInfo_$6367_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6097:9:27",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6108:6:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "6119:4:27",
                "type": ""
              }
            ],
            "src": "5975:250:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6377:587:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6424:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6433:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6436:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6426:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6426:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6426:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6398:7:27"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6407:9:27"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6394:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6394:23:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6419:3:27",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6390:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6390:33:27"
                  },
                  "nodeType": "YulIf",
                  "src": "6387:53:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6449:36:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "6475:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6462:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6462:23:27"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "6453:5:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6519:5:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6494:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6494:31:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6494:31:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6534:15:27",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "6544:5:27"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "6534:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6558:47:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6590:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6601:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6586:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6586:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6573:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6573:32:27"
                  },
                  "variables": [
                    {
                      "name": "value_1",
                      "nodeType": "YulTypedName",
                      "src": "6562:7:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value_1",
                        "nodeType": "YulIdentifier",
                        "src": "6639:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "6614:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6614:33:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6614:33:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6656:17:27",
                  "value": {
                    "name": "value_1",
                    "nodeType": "YulIdentifier",
                    "src": "6666:7:27"
                  },
                  "variableNames": [
                    {
                      "name": "value1",
                      "nodeType": "YulIdentifier",
                      "src": "6656:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6682:42:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6709:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6720:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6705:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6705:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6692:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6692:32:27"
                  },
                  "variableNames": [
                    {
                      "name": "value2",
                      "nodeType": "YulIdentifier",
                      "src": "6682:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6733:42:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6760:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6771:2:27",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6756:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6756:18:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6743:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6743:32:27"
                  },
                  "variableNames": [
                    {
                      "name": "value3",
                      "nodeType": "YulIdentifier",
                      "src": "6733:6:27"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "6784:47:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6815:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6826:3:27",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6811:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6811:19:27"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6798:12:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6798:33:27"
                  },
                  "variables": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "6788:6:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6874:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6883:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6886:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6876:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6876:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6876:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "6846:6:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6854:18:27",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6843:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6843:30:27"
                  },
                  "nodeType": "YulIf",
                  "src": "6840:50:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6899:59:27",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6930:9:27"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "6941:6:27"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6926:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6926:22:27"
                      },
                      {
                        "name": "dataEnd",
                        "nodeType": "YulIdentifier",
                        "src": "6950:7:27"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_bytes",
                      "nodeType": "YulIdentifier",
                      "src": "6909:16:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6909:49:27"
                  },
                  "variableNames": [
                    {
                      "name": "value4",
                      "nodeType": "YulIdentifier",
                      "src": "6899:6:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6311:9:27",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6322:7:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6334:6:27",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6342:6:27",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "6350:6:27",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "6358:6:27",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "6366:6:27",
                "type": ""
              }
            ],
            "src": "6230:734:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7098:168:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7108:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7120:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7131:2:27",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7116:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7116:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7108:4:27"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7150:9:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "7165:6:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7173:42:27",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "7161:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7161:55:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7143:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7143:74:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7143:74:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7237:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7248:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7233:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7233:18:27"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "7253:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7226:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7226:34:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7226:34:27"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7059:9:27",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "7070:6:27",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7078:6:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7089:4:27",
                "type": ""
              }
            ],
            "src": "6969:297:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7352:103:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7398:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7407:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7410:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7400:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7400:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7400:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7373:7:27"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7382:9:27"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7369:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7369:23:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7394:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "7365:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7365:32:27"
                  },
                  "nodeType": "YulIf",
                  "src": "7362:52:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7423:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7439:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "7433:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7433:16:27"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "7423:6:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7318:9:27",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "7329:7:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7341:6:27",
                "type": ""
              }
            ],
            "src": "7271:184:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7634:228:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7651:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7662:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7644:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7644:21:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7644:21:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7685:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7696:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7681:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7681:18:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7701:2:27",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7674:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7674:30:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7674:30:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7724:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7735:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7720:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7720:18:27"
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e20757064617465207573",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7740:34:27",
                        "type": "",
                        "value": "only weapon owners can update us"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7713:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7713:62:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7713:62:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7795:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7806:2:27",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7791:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7791:18:27"
                      },
                      {
                        "hexValue": "6572496e666f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "7811:8:27",
                        "type": "",
                        "value": "erInfo"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7784:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7784:36:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7784:36:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "7829:27:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "7841:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7852:3:27",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7837:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7837:19:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "7829:4:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7611:9:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "7625:4:27",
                "type": ""
              }
            ],
            "src": "7460:402:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8052:255:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8062:27:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8074:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8085:3:27",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8070:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8070:19:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8062:4:27"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8105:9:27"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8116:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8098:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8098:25:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8098:25:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8143:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8154:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8139:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8139:18:27"
                      },
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "8159:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8132:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8132:34:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8132:34:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8186:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8197:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8182:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8182:18:27"
                      },
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "8202:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8175:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8175:34:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8175:34:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8229:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8240:2:27",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8225:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8225:18:27"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value3",
                            "nodeType": "YulIdentifier",
                            "src": "8249:6:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8257:42:27",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "8245:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8245:55:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8218:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8218:83:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8218:83:27"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_uint256_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7997:9:27",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "8008:6:27",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "8016:6:27",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "8024:6:27",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8032:6:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8043:4:27",
                "type": ""
              }
            ],
            "src": "7867:440:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8413:76:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8423:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8435:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8446:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8431:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8431:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "8423:4:27"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8465:9:27"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8476:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8458:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8458:25:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8458:25:27"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8382:9:27",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8393:6:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8404:4:27",
                "type": ""
              }
            ],
            "src": "8312:177:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8575:170:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8621:16:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8630:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8633:1:27",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "8623:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8623:12:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8623:12:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "8596:7:27"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8605:9:27"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "8592:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8592:23:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8617:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "8588:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8588:32:27"
                  },
                  "nodeType": "YulIf",
                  "src": "8585:52:27"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8646:29:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8665:9:27"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "8659:5:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8659:16:27"
                  },
                  "variables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "8650:5:27",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8709:5:27"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_address",
                      "nodeType": "YulIdentifier",
                      "src": "8684:24:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8684:31:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8684:31:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8724:15:27",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "8734:5:27"
                  },
                  "variableNames": [
                    {
                      "name": "value0",
                      "nodeType": "YulIdentifier",
                      "src": "8724:6:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8541:9:27",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "8552:7:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8564:6:27",
                "type": ""
              }
            ],
            "src": "8494:251:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8924:223:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "8941:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8952:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8934:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8934:21:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8934:21:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "8975:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8986:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8971:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8971:18:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8991:2:27",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8964:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8964:30:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8964:30:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9014:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9025:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9010:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9010:18:27"
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e2075",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9030:34:27",
                        "type": "",
                        "value": "only character owners can sign u"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9003:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9003:62:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9003:62:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9085:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9096:2:27",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9081:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9081:18:27"
                      },
                      {
                        "hexValue": "70",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9101:3:27",
                        "type": "",
                        "value": "p"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9074:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9074:31:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9074:31:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9114:27:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9126:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9137:3:27",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9122:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9122:19:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9114:4:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "8901:9:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "8915:4:27",
                "type": ""
              }
            ],
            "src": "8750:397:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9326:180:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9343:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9354:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9336:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9336:21:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9336:21:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9377:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9388:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9373:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9373:18:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9393:2:27",
                        "type": "",
                        "value": "30"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9366:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9366:30:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9366:30:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9416:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9427:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9412:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9412:18:27"
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "9432:32:27",
                        "type": "",
                        "value": "only weapon owners can sign up"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9405:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9405:60:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9405:60:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9474:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9486:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9497:2:27",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9482:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9482:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9474:4:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9303:9:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9317:4:27",
                "type": ""
              }
            ],
            "src": "9152:354:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9543:152:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9560:1:27",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9563:77:27",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9553:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9553:88:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9553:88:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9657:1:27",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9660:4:27",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9650:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9650:15:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9650:15:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9681:1:27",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9684:4:27",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9674:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9674:15:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9674:15:27"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "9511:184:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9749:79:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9759:17:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9771:1:27"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "9774:1:27"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "9767:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9767:9:27"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "9759:4:27"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9800:22:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "9802:16:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9802:18:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9802:18:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "9791:4:27"
                      },
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "9797:1:27"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "9788:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9788:11:27"
                  },
                  "nodeType": "YulIf",
                  "src": "9785:37:27"
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "9731:1:27",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "9734:1:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "9740:4:27",
                "type": ""
              }
            ],
            "src": "9700:128:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9865:152:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9882:1:27",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9885:77:27",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9875:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9875:88:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9875:88:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9979:1:27",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9982:4:27",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9972:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9972:15:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9972:15:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10003:1:27",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10006:4:27",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9996:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9996:15:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9996:15:27"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "9833:184:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10069:88:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10100:22:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "10102:16:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10102:18:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10102:18:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "10085:5:27"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10096:1:27",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "10092:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10092:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "10082:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10082:17:27"
                  },
                  "nodeType": "YulIf",
                  "src": "10079:43:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10131:20:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "10142:5:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10149:1:27",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10138:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10138:13:27"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "10131:3:27"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "10051:5:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "10061:3:27",
                "type": ""
              }
            ],
            "src": "10022:135:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10336:177:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10353:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10364:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10346:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10346:21:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10346:21:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10387:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10398:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10383:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10383:18:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10403:2:27",
                        "type": "",
                        "value": "27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10376:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10376:30:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10376:30:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10426:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10437:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10422:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10422:18:27"
                      },
                      {
                        "hexValue": "796f752061726520746865206f6e6c79206f6e6520706c61796572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "10442:29:27",
                        "type": "",
                        "value": "you are the only one player"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10415:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10415:57:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10415:57:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10481:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10493:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10504:2:27",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10489:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10489:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10481:4:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10313:9:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10327:4:27",
                "type": ""
              }
            ],
            "src": "10162:351:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10637:63:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10654:3:27"
                      },
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10659:6:27"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10647:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10647:19:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10647:19:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10675:19:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "10686:3:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10691:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10682:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10682:12:27"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "10675:3:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "10613:3:27",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10618:6:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10629:3:27",
                "type": ""
              }
            ],
            "src": "10518:182:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10743:228:27",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10774:168:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10795:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10798:77:27",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10788:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10788:88:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10788:88:27"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10896:1:27",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10899:4:27",
                              "type": "",
                              "value": "0x12"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10889:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10889:15:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10889:15:27"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10924:1:27",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10927:4:27",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10917:6:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10917:15:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10917:15:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10763:1:27"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "10756:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10756:9:27"
                  },
                  "nodeType": "YulIf",
                  "src": "10753:189:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10951:14:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "10960:1:27"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "10963:1:27"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "10956:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10956:9:27"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "10951:1:27"
                    }
                  ]
                }
              ]
            },
            "name": "mod_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "10728:1:27",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "10731:1:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "10737:1:27",
                "type": ""
              }
            ],
            "src": "10705:266:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11024:77:27",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11034:16:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11045:1:27"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "11048:1:27"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11041:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11041:9:27"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "11034:3:27"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11073:22:27",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "11075:16:27"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11075:18:27"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11075:18:27"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11065:1:27"
                      },
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "11068:3:27"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "11062:2:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11062:10:27"
                  },
                  "nodeType": "YulIf",
                  "src": "11059:36:27"
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "11007:1:27",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "11010:1:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "11016:3:27",
                "type": ""
              }
            ],
            "src": "10976:125:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11280:228:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11297:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11308:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11290:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11290:21:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11290:21:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11331:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11342:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11327:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11327:18:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11347:2:27",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11320:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11320:30:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11320:30:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11370:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11381:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11366:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11366:18:27"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11386:34:27",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11359:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11359:62:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11359:62:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11441:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11452:2:27",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11437:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11437:18:27"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11457:8:27",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11430:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11430:36:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11430:36:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11475:27:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11487:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11498:3:27",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11483:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11483:19:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11475:4:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11257:9:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11271:4:27",
                "type": ""
              }
            ],
            "src": "11106:402:27"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11687:182:27",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11704:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11715:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11697:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11697:21:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11697:21:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11738:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11749:2:27",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11734:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11734:18:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11754:2:27",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11727:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11727:30:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11727:30:27"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11777:9:27"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11788:2:27",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11773:3:27"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11773:18:27"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "11793:34:27",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11766:6:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11766:62:27"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11766:62:27"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11837:26:27",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "11849:9:27"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11860:2:27",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11845:3:27"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11845:18:27"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11837:4:27"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11664:9:27",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "11678:4:27",
                "type": ""
              }
            ],
            "src": "11513:356:27"
          }
        ]
      },
      "contents": "{\n    { }\n    function validator_revert_address(value)\n    {\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n    function allocate_memory(size) -> memPtr\n    {\n        memPtr := mload(64)\n        let newFreePtr := add(memPtr, and(add(size, 31), not(31)))\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n    function abi_decode_bytes(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        if gt(_1, 0xffffffffffffffff) { panic_error_0x41() }\n        let array_1 := allocate_memory(add(and(add(_1, 0x1f), not(31)), 0x20))\n        mstore(array_1, _1)\n        if gt(add(add(offset, _1), 0x20), end) { revert(0, 0) }\n        calldatacopy(add(array_1, 0x20), add(offset, 0x20), _1)\n        mstore(add(add(array_1, _1), 0x20), 0)\n        array := array_1\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3\n    {\n        if slt(sub(dataEnd, headStart), 128) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n        let offset := calldataload(add(headStart, 96))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value3 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function abi_encode_tuple_t_bytes4__to_t_bytes4__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffff00000000000000000000000000000000000000000000000000000000))\n    }\n    function abi_decode_tuple_t_uint256t_uint256(headStart, dataEnd) -> value0, value1\n    {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n        value0 := calldataload(headStart)\n        value1 := calldataload(add(headStart, 32))\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_decode_array_uint256_dyn(offset, end) -> array\n    {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let _1 := calldataload(offset)\n        let _2 := 0x20\n        if gt(_1, 0xffffffffffffffff) { panic_error_0x41() }\n        let _3 := shl(5, _1)\n        let dst := allocate_memory(add(_3, _2))\n        let dst_1 := dst\n        mstore(dst, _1)\n        dst := add(dst, _2)\n        let srcEnd := add(add(offset, _3), _2)\n        if gt(srcEnd, end) { revert(0, 0) }\n        let src := add(offset, _2)\n        for { } lt(src, srcEnd) { src := add(src, _2) }\n        {\n            mstore(dst, calldataload(src))\n            dst := add(dst, _2)\n        }\n        array := dst_1\n    }\n    function abi_decode_tuple_t_addresst_addresst_array$_t_uint256_$dyn_memory_ptrt_array$_t_uint256_$dyn_memory_ptrt_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        let offset := calldataload(add(headStart, 64))\n        let _1 := 0xffffffffffffffff\n        if gt(offset, _1) { revert(0, 0) }\n        value2 := abi_decode_array_uint256_dyn(add(headStart, offset), dataEnd)\n        let offset_1 := calldataload(add(headStart, 96))\n        if gt(offset_1, _1) { revert(0, 0) }\n        value3 := abi_decode_array_uint256_dyn(add(headStart, offset_1), dataEnd)\n        let offset_2 := calldataload(add(headStart, 128))\n        if gt(offset_2, _1) { revert(0, 0) }\n        value4 := abi_decode_bytes(add(headStart, offset_2), dataEnd)\n    }\n    function abi_encode_struct_Token(value, pos)\n    {\n        mstore(pos, and(mload(value), 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(pos, 0x20), mload(add(value, 0x20)))\n    }\n    function abi_encode_struct_UserInfo(value, pos)\n    {\n        mstore(pos, mload(value))\n        let memberValue0 := mload(add(value, 0x20))\n        abi_encode_struct_Token(memberValue0, add(pos, 0x20))\n        let memberValue0_1 := mload(add(value, 0x40))\n        abi_encode_struct_Token(memberValue0_1, add(pos, 0x60))\n        mstore(add(pos, 0xa0), and(mload(add(value, 0x60)), 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr__to_t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            abi_encode_struct_UserInfo(mload(srcPtr), pos)\n            pos := add(pos, 0xc0)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_struct$_UserInfo_$6367_memory_ptr__to_t_struct$_UserInfo_$6367_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 192)\n        abi_encode_struct_UserInfo(value0, headStart)\n    }\n    function abi_decode_tuple_t_addresst_addresst_uint256t_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4\n    {\n        if slt(sub(dataEnd, headStart), 160) { revert(0, 0) }\n        let value := calldataload(headStart)\n        validator_revert_address(value)\n        value0 := value\n        let value_1 := calldataload(add(headStart, 32))\n        validator_revert_address(value_1)\n        value1 := value_1\n        value2 := calldataload(add(headStart, 64))\n        value3 := calldataload(add(headStart, 96))\n        let offset := calldataload(add(headStart, 128))\n        if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n        value4 := abi_decode_bytes(add(headStart, offset), dataEnd)\n    }\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart, value1, value0) -> tail\n    {\n        tail := add(headStart, 64)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n        mstore(add(headStart, 32), value1)\n    }\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := mload(headStart)\n    }\n    function abi_encode_tuple_t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"only weapon owners can update us\")\n        mstore(add(headStart, 96), \"erInfo\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_uint256_t_address__fromStack_reversed(headStart, value3, value2, value1, value0) -> tail\n    {\n        tail := add(headStart, 128)\n        mstore(headStart, value0)\n        mstore(add(headStart, 32), value1)\n        mstore(add(headStart, 64), value2)\n        mstore(add(headStart, 96), and(value3, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := mload(headStart)\n        validator_revert_address(value)\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 33)\n        mstore(add(headStart, 64), \"only character owners can sign u\")\n        mstore(add(headStart, 96), \"p\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 30)\n        mstore(add(headStart, 64), \"only weapon owners can sign up\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        diff := sub(x, y)\n        if gt(diff, x) { panic_error_0x11() }\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"you are the only one player\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_packed_t_uint256__to_t_uint256__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        mstore(pos, value0)\n        end := add(pos, 32)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y)\n        {\n            mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n            mstore(4, 0x12)\n            revert(0, 0x24)\n        }\n        r := mod(x, y)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        sum := add(x, y)\n        if gt(x, sum) { panic_error_0x11() }\n    }\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Ownable: new owner is the zero a\")\n        mstore(add(headStart, 96), \"ddress\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 32)\n        mstore(add(headStart, 64), \"Ownable: caller is not the owner\")\n        tail := add(headStart, 96)\n    }\n}",
      "id": 27,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "375:4843:25:-:0;;;510:6;491:25;;675:367;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;936:32:0;719:10:15;936:18:0;:32::i;:::-;859::25;869:21;859:9;:32::i;:::-;-1:-1:-1;901:18:25;:40;;-1:-1:-1;;;;;901:40:25;;;-1:-1:-1;;;;;;901:40:25;;;;;;;951:19;:42;;;;;;;;;;;;;;;1003:14;:32;;;;;;;;;;;-1:-1:-1;375:4843:25;;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;;;;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;1820:191:25:-;1889:4;1094:13:0;:11;:13::i;:::-;-1:-1:-1;;;;;1913:29:25;::::1;1905:38;;;::::0;::::1;;-1:-1:-1::0;1953:5:25::1;:30:::0;;-1:-1:-1;;;;;1953:30:25;::::1;-1:-1:-1::0;;;;;;1953:30:25;;::::1;;::::0;;;1820:191;;;:::o;1359:130:0:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:15;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;1019:2:27;1414:68:0;;;1001:21:27;;;1038:18;;;1031:30;1097:34;1077:18;;;1070:62;1149:18;;1414:68:0;;;;;;;;1359:130::o;14:131:27:-;-1:-1:-1;;;;;89:31:27;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:662::-;255:6;263;271;279;332:3;320:9;311:7;307:23;303:33;300:53;;;349:1;346;339:12;300:53;381:9;375:16;400:31;425:5;400:31;:::i;:::-;500:2;485:18;;479:25;450:5;;-1:-1:-1;513:33:27;479:25;513:33;:::i;:::-;617:2;602:18;;596:25;565:7;;-1:-1:-1;630:33:27;596:25;630:33;:::i;:::-;734:2;719:18;;713:25;682:7;;-1:-1:-1;747:33:27;713:25;747:33;:::i;:::-;150:662;;;;-1:-1:-1;150:662:27;;-1:-1:-1;;150:662:27:o;817:356::-;375:4843:25;;;;;;",
  "deployedSourceMap": "375:4843:25:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5063:153;;;;;;:::i;:::-;5179:30;5063:153;;;;;;;;;;2021:66:27;2009:79;;;1991:98;;1979:2;1964:18;5063:153:25;;;;;;;;3352:438;;;;;;:::i;:::-;;:::i;:::-;;2928:418;;;;;;:::i;:::-;;:::i;1831:101:0:-;;;:::i;1201:85::-;1247:7;1273:6;1201:85;;-1:-1:-1;;;;;1273:6:0;;;2499:74:27;;2487:2;2472:18;1201:85:0;2353:226:27;2017:905:25;;;;;;:::i;:::-;;:::i;4865:192::-;;;;;;:::i;:::-;5014:36;4865:192;;;;;;;;4277:412;;;:::i;:::-;;;;;;;:::i;3796:475::-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;4695:164::-;;;;;;:::i;:::-;4821:31;4695:164;;;;;;;;2081:198:0;;;;;;:::i;:::-;;:::i;3352:438:25:-;3465:19;;3457:61;;-1:-1:-1;;;3457:61:25;;3496:10;3457:61;;;7143:74:27;7233:18;;;7226:34;;;-1:-1:-1;;;;;3465:19:25;;;;3457:38;;7116:18:27;;3457:61:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3520:1;3457:64;3449:116;;;;-1:-1:-1;;;3449:116:25;;7662:2:27;3449:116:25;;;7644:21:27;7701:2;7681:18;;;7674:30;7740:34;7720:18;;;7713:62;7811:8;7791:18;;;7784:36;7837:19;;3449:116:25;;;;;;;;;3576:19;;;;:10;:19;;;;;;;;;:39;;;:51;;;3668:37;;;3643:140;;8098:25:27;;;8139:18;;;8132:34;;;8182:18;;;8175:34;;;3763:10:25;8240:2:27;8225:18;;8218:83;3643:140:25;;8085:3:27;8070:19;3643:140:25;;;;;;;;3352:438;;:::o;2928:418::-;3050:18;;3043:43;;-1:-1:-1;;;3043:43:25;;;;;8458:25:27;;;-1:-1:-1;;;;;3050:18:25;;;;3043:34;;8431:18:27;;3043:43:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;3029:57:25;:10;-1:-1:-1;;;;;3029:57:25;;3021:104;;;;-1:-1:-1;;;3021:104:25;;8952:2:27;3021:104:25;;;8934:21:27;8991:2;8971:18;;;8964:30;9030:34;9010:18;;;9003:62;-1:-1:-1;;;9081:18:27;;;9074:31;9122:19;;3021:104:25;8750:397:27;3021:104:25;3136:19;;;;:10;:19;;;;;;;;;:37;;;:47;;;3245:39;;;3199:140;;8098:25:27;;;8139:18;;;8132:34;8182:18;;;8175:34;;;3319:10:25;8240:2:27;8225:18;;8218:83;3199:140:25;;8085:3:27;8070:19;3199:140:25;7867:440:27;1831:101:0;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;2017:905:25:-;2137:18;;2130:43;;-1:-1:-1;;;2130:43:25;;;;;8458:25:27;;;-1:-1:-1;;;;;2137:18:25;;;;2130:34;;8431:18:27;;2130:43:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;2116:57:25;:10;-1:-1:-1;;;;;2116:57:25;;2108:104;;;;-1:-1:-1;;;2108:104:25;;8952:2:27;2108:104:25;;;8934:21:27;8991:2;8971:18;;;8964:30;9030:34;9010:18;;;9003:62;-1:-1:-1;;;9081:18:27;;;9074:31;9122:19;;2108:104:25;8750:397:27;2108:104:25;2238:19;;2230:61;;-1:-1:-1;;;2230:61:25;;2269:10;2230:61;;;7143:74:27;7233:18;;;7226:34;;;-1:-1:-1;;;;;2238:19:25;;;;2230:38;;7116:18:27;;2230:61:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2293:1;2230:64;2222:108;;;;-1:-1:-1;;;2222:108:25;;9354:2:27;2222:108:25;;;9336:21:27;9393:2;9373:18;;;9366:30;9432:32;9412:18;;;9405:60;9482:18;;2222:108:25;9152:354:27;2222:108:25;2341:20;:8;1032:19:16;;1050:1;1032:19;;;945:123;2341:20:25;2371:14;2388:18;:8;918:14:16;;827:112;2388:18:25;2438:352;;;;;;;;;;;;2500:105;;;;;;;2538:18;;;-1:-1:-1;;;;;2538:18:25;;;2500:105;;2438:352;2500:105;;;;;;2438:352;;;;;;2632:108;;;;;;;2670:19;;;;2632:108;;;;;;;;2438:352;;;;;;2768:10;2438:352;;;;;;;-1:-1:-1;2417:18:25;;;:10;:18;;;;;:373;;;;;;;;2538:18;2417:373;;;;;;;-1:-1:-1;;2417:373:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2806:109;;8098:25:27;;;8139:18;;;8132:34;;;8182:18;;;8175:34;;;8225:18;;8218:83;;;;2438:352:25;;-1:-1:-1;2806:109:25;;8070:19:27;2806:109:25;;;;;;;2098:824;2017:905;;:::o;4277:412::-;4320:17;4349:14;4366:18;:8;918:14:16;;827:112;4366:18:25;4349:35;;4394:23;4436:9;4421:25;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;-1:-1:-1;4394:52:25;-1:-1:-1;4471:1:25;4457:204;4479:9;4474:1;:14;4457:204;;4509:14;4526:13;;;:10;:13;;;;;;;;:20;4591:21;;;;;;;4626:24;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4626:24:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4591:21;4626:24;:5;;4632:3;;4537:1;4632:3;:::i;:::-;4626:10;;;;;;;;:::i;:::-;;;;;;:24;;;;4495:166;;4490:3;;;;;:::i;:::-;;;;4457:204;;;-1:-1:-1;4677:5:25;4277:412;-1:-1:-1;;4277:412:25:o;3796:475::-;3851:15;;:::i;:::-;3886:8;918:14:16;3906:1:25;3886:21;3878:61;;;;-1:-1:-1;;;3878:61:25;;10364:2:27;3878:61:25;;;10346:21:27;10403:2;10383:18;;;10376:30;10442:29;10422:18;;;10415:57;10489:18;;3878:61:25;10162:351:27;3878:61:25;3949:14;3966:18;:8;918:14:16;;827:112;3966:18:25;3949:35;;3994:9;4063;4041:15;4024:33;;;;;;10647:19:27;;10691:2;10682:12;;10518:182;4024:33:25;;;;;;;;;;;;;4014:44;;;;;;4006:53;;:67;;;;:::i;:::-;3994:79;-1:-1:-1;;;;;;4086:29:25;;:10;:15;4097:3;3994:79;4099:1;4097:3;:::i;:::-;4086:15;;;;;;;;;;;-1:-1:-1;4086:15:25;:20;;;-1:-1:-1;;;;;4086:20:25;:29;4083:182;;4130:24;4158:10;4130:24;4169:3;:1;4171;4169:3;:::i;:::-;4158:15;;;;;;;;;;;;;;-1:-1:-1;4158:15:25;4130:43;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4130:43:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3796:475;-1:-1:-1;;;;;3796:475:25:o;4083:182::-;4238:16;4248:5;4238:9;:16::i;:::-;4231:23;3796:475;-1:-1:-1;;;;3796:475:25:o;2081:198:0:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2169:22:0;::::1;2161:73;;;::::0;-1:-1:-1;;;2161:73:0;;11308:2:27;2161:73:0::1;::::0;::::1;11290:21:27::0;11347:2;11327:18;;;11320:30;11386:34;11366:18;;;11359:62;11457:8;11437:18;;;11430:36;11483:19;;2161:73:0::1;11106:402:27::0;2161:73:0::1;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;1359:130::-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:0;719:10:15;1422:23:0;1414:68;;;;-1:-1:-1;;;1414:68:0;;11715:2:27;1414:68:0;;;11697:21:27;;;11734:18;;;11727:30;11793:34;11773:18;;;11766:62;11845:18;;1414:68:0;11513:356:27;2433:187:0;2506:16;2525:6;;-1:-1:-1;;;;;2541:17:0;;;-1:-1:-1;;2541:17:0;;;;;;2573:40;;2525:6;;;;;;;2573:40;;2506:16;2573:40;2496:124;2433:187;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:154:27:-;-1:-1:-1;;;;;93:5:27;89:54;82:5;79:65;69:93;;158:1;155;148:12;173:184;-1:-1:-1;;;222:1:27;215:88;322:4;319:1;312:15;346:4;343:1;336:15;362:275;433:2;427:9;498:2;479:13;;-1:-1:-1;;475:27:27;463:40;;533:18;518:34;;554:22;;;515:62;512:88;;;580:18;;:::i;:::-;616:2;609:22;362:275;;-1:-1:-1;362:275:27:o;642:530::-;684:5;737:3;730:4;722:6;718:17;714:27;704:55;;755:1;752;745:12;704:55;791:6;778:20;817:18;813:2;810:26;807:52;;;839:18;;:::i;:::-;883:55;926:2;907:13;;-1:-1:-1;;903:27:27;932:4;899:38;883:55;:::i;:::-;963:2;954:7;947:19;1009:3;1002:4;997:2;989:6;985:15;981:26;978:35;975:55;;;1026:1;1023;1016:12;975:55;1091:2;1084:4;1076:6;1072:17;1065:4;1056:7;1052:18;1039:55;1139:1;1114:16;;;1132:4;1110:27;1103:38;;;;1118:7;642:530;-1:-1:-1;;;642:530:27:o;1177:665::-;1272:6;1280;1288;1296;1349:3;1337:9;1328:7;1324:23;1320:33;1317:53;;;1366:1;1363;1356:12;1317:53;1405:9;1392:23;1424:31;1449:5;1424:31;:::i;:::-;1474:5;-1:-1:-1;1531:2:27;1516:18;;1503:32;1544:33;1503:32;1544:33;:::i;:::-;1596:7;-1:-1:-1;1650:2:27;1635:18;;1622:32;;-1:-1:-1;1705:2:27;1690:18;;1677:32;1732:18;1721:30;;1718:50;;;1764:1;1761;1754:12;1718:50;1787:49;1828:7;1819:6;1808:9;1804:22;1787:49;:::i;:::-;1777:59;;;1177:665;;;;;;;:::o;2100:248::-;2168:6;2176;2229:2;2217:9;2208:7;2204:23;2200:32;2197:52;;;2245:1;2242;2235:12;2197:52;-1:-1:-1;;2268:23:27;;;2338:2;2323:18;;;2310:32;;-1:-1:-1;2100:248:27:o;2584:712::-;2638:5;2691:3;2684:4;2676:6;2672:17;2668:27;2658:55;;2709:1;2706;2699:12;2658:55;2745:6;2732:20;2771:4;2794:18;2790:2;2787:26;2784:52;;;2816:18;;:::i;:::-;2862:2;2859:1;2855:10;2885:28;2909:2;2905;2901:11;2885:28;:::i;:::-;2947:15;;;3017;;;3013:24;;;2978:12;;;;3049:15;;;3046:35;;;3077:1;3074;3067:12;3046:35;3113:2;3105:6;3101:15;3090:26;;3125:142;3141:6;3136:3;3133:15;3125:142;;;3207:17;;3195:30;;3158:12;;;;3245;;;;3125:142;;;3285:5;2584:712;-1:-1:-1;;;;;;;2584:712:27:o;3301:1071::-;3455:6;3463;3471;3479;3487;3540:3;3528:9;3519:7;3515:23;3511:33;3508:53;;;3557:1;3554;3547:12;3508:53;3596:9;3583:23;3615:31;3640:5;3615:31;:::i;:::-;3665:5;-1:-1:-1;3722:2:27;3707:18;;3694:32;3735:33;3694:32;3735:33;:::i;:::-;3787:7;-1:-1:-1;3845:2:27;3830:18;;3817:32;3868:18;3898:14;;;3895:34;;;3925:1;3922;3915:12;3895:34;3948:61;4001:7;3992:6;3981:9;3977:22;3948:61;:::i;:::-;3938:71;;4062:2;4051:9;4047:18;4034:32;4018:48;;4091:2;4081:8;4078:16;4075:36;;;4107:1;4104;4097:12;4075:36;4130:63;4185:7;4174:8;4163:9;4159:24;4130:63;:::i;:::-;4120:73;;4246:3;4235:9;4231:19;4218:33;4202:49;;4276:2;4266:8;4263:16;4260:36;;;4292:1;4289;4282:12;4260:36;;4315:51;4358:7;4347:8;4336:9;4332:24;4315:51;:::i;:::-;4305:61;;;3301:1071;;;;;;;;:::o;5012:706::-;5235:2;5287:21;;;5357:13;;5260:18;;;5379:22;;;5206:4;;5235:2;5458:15;;;;5432:2;5417:18;;;5206:4;5501:191;5515:6;5512:1;5509:13;5501:191;;;5564:46;5606:3;5597:6;5591:13;4651:12;;4639:25;;4710:4;4699:16;;;4693:23;4452:12;;-1:-1:-1;;;;;4448:61:27;4763:14;;;4436:74;4548:16;;;4542:23;4526:14;;;4519:47;-1:-1:-1;4826:4:27;4815:16;;4809:23;4452:12;;-1:-1:-1;;;;;4448:61:27;4890:4;4881:14;;4436:74;4559:4;4548:16;;4542:23;4526:14;;;4519:47;-1:-1:-1;4949:4:27;4938:16;4932:23;-1:-1:-1;;;;;4928:72:27;4921:4;4912:14;;;;4905:96;4577:430;5564:46;5667:15;;;;5639:4;5630:14;;;;;5537:1;5530:9;5501:191;;;-1:-1:-1;5709:3:27;;5012:706;-1:-1:-1;;;;;;5012:706:27:o;5723:247::-;5782:6;5835:2;5823:9;5814:7;5810:23;5806:32;5803:52;;;5851:1;5848;5841:12;5803:52;5890:9;5877:23;5909:31;5934:5;5909:31;:::i;:::-;5959:5;5723:247;-1:-1:-1;;;5723:247:27:o;5975:250::-;6161:3;6146:19;;6174:45;6150:9;6201:6;4651:12;;4639:25;;4710:4;4699:16;;;4693:23;4452:12;;-1:-1:-1;;;;;4448:61:27;4763:14;;;4436:74;4548:16;;;4542:23;4526:14;;;4519:47;-1:-1:-1;4826:4:27;4815:16;;4809:23;4452:12;;-1:-1:-1;;;;;4448:61:27;4890:4;4881:14;;4436:74;4559:4;4548:16;;4542:23;4526:14;;;4519:47;-1:-1:-1;4949:4:27;4938:16;4932:23;-1:-1:-1;;;;;4928:72:27;4921:4;4912:14;;;;4905:96;4577:430;6174:45;5975:250;;;;:::o;6230:734::-;6334:6;6342;6350;6358;6366;6419:3;6407:9;6398:7;6394:23;6390:33;6387:53;;;6436:1;6433;6426:12;6387:53;6475:9;6462:23;6494:31;6519:5;6494:31;:::i;:::-;6544:5;-1:-1:-1;6601:2:27;6586:18;;6573:32;6614:33;6573:32;6614:33;:::i;:::-;6666:7;-1:-1:-1;6720:2:27;6705:18;;6692:32;;-1:-1:-1;6771:2:27;6756:18;;6743:32;;-1:-1:-1;6826:3:27;6811:19;;6798:33;6854:18;6843:30;;6840:50;;;6886:1;6883;6876:12;6840:50;6909:49;6950:7;6941:6;6930:9;6926:22;6909:49;:::i;7271:184::-;7341:6;7394:2;7382:9;7373:7;7369:23;7365:32;7362:52;;;7410:1;7407;7400:12;7362:52;-1:-1:-1;7433:16:27;;7271:184;-1:-1:-1;7271:184:27:o;8494:251::-;8564:6;8617:2;8605:9;8596:7;8592:23;8588:32;8585:52;;;8633:1;8630;8623:12;8585:52;8665:9;8659:16;8684:31;8709:5;8684:31;:::i;9511:184::-;-1:-1:-1;;;9560:1:27;9553:88;9660:4;9657:1;9650:15;9684:4;9681:1;9674:15;9700:128;9767:9;;;9788:11;;;9785:37;;;9802:18;;:::i;9833:184::-;-1:-1:-1;;;9882:1:27;9875:88;9982:4;9979:1;9972:15;10006:4;10003:1;9996:15;10022:135;10061:3;10082:17;;;10079:43;;10102:18;;:::i;:::-;-1:-1:-1;10149:1:27;10138:13;;10022:135::o;10705:266::-;10737:1;10763;10753:189;;-1:-1:-1;;;10795:1:27;10788:88;10899:4;10896:1;10889:15;10927:4;10924:1;10917:15;10753:189;-1:-1:-1;10956:9:27;;10705:266::o;10976:125::-;11041:9;;;11062:10;;;11059:36;;;11075:18;;:::i",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.7;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/token/ERC1155/ERC1155.sol\";\nimport \"@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"./JMToken.sol\";\n\ncontract MapleUser is Ownable {\n    using Counters for Counters.Counter;\n    Counters.Counter private _userIds;\n    uint256 decimals = 10**18;\n    JMToken private token;\n    address payable private treasuryWallet;\n    address private nftContractAddress;\n    address private itemContractAddress;\n\n    constructor (\n        address _tokenContractAddress,\n        address _nftContractAddress,\n        address _itemContractAddress,\n        address payable _treasuryWallet\n    ) {\n        _setToken(_tokenContractAddress);\n        nftContractAddress = _nftContractAddress;\n        itemContractAddress = _itemContractAddress;\n        treasuryWallet = _treasuryWallet;\n    }\n\n    mapping(uint256 => UserInfo) idUserInfo;\n\n    struct Token {\n        address contractAddr;\n        uint256 tokenId;\n    }\n\n    struct UserInfo {\n        uint256 userId;\n        Token charToken;\n        Token weaponToken;\n        address payable user;\n    }\n\n    event UserCreated (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    event UserUpdated (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    event UserMatching (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    event UserDeleated (\n        uint256 charId,\n        uint256 weaponId,\n        uint256 userId,\n        address user\n    );\n\n    function _setToken(address _tokenAddress) private onlyOwner returns (bool) {\n        require(_tokenAddress != address(0x0));\n        token = JMToken(_tokenAddress);\n        return true;\n    }\n\n    function signUp(\n        uint256 _charId,\n        uint256 _weaponId\n    ) public {\n        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  \"only character owners can sign up\");\n        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  \"only weapon owners can sign up\");\n\n        _userIds.increment();\n        uint256 userId = _userIds.current();\n\n        idUserInfo[userId] = UserInfo({\n            userId: userId,\n            charToken: Token({\n                contractAddr: nftContractAddress,\n                tokenId: _charId\n            }),\n            weaponToken: Token({\n                contractAddr: itemContractAddress,\n                tokenId: _weaponId\n            }),\n            user: payable(msg.sender)\n        });\n\n        emit UserCreated(\n            _charId,\n            _weaponId,\n            userId,\n            msg.sender\n        );\n    }\n\n    function updateChar(\n        uint256 _charId,\n        uint256 _userId\n    ) public {\n        require(msg.sender == ERC721(nftContractAddress).ownerOf(_charId),  \"only character owners can sign up\");\n\n        idUserInfo[_userId].charToken.tokenId = _charId;\n\n        emit UserUpdated(\n            _charId,\n            idUserInfo[_userId].weaponToken.tokenId,\n            _userId,\n            msg.sender\n        );\n    }\n\n    function updateWeapon(\n        uint256 _weaponId,\n        uint256 _userId\n    ) public {\n        require(ERC1155(itemContractAddress).balanceOf(msg.sender, _weaponId)!=0,  \"only weapon owners can update userInfo\");\n\n        idUserInfo[_userId].weaponToken.tokenId = _weaponId;\n\n        emit UserUpdated(\n            idUserInfo[_userId].charToken.tokenId,\n            _weaponId,\n            _userId,\n            msg.sender\n        );\n    }\n\n    function matchUser(address _user) public view returns (UserInfo memory) {\n        require(_userIds.current()!=1, \"you are the only one player\");\n        uint userCount = _userIds.current();\n        uint256 n = uint256(keccak256(abi.encodePacked(block.timestamp))) % (userCount);\n        if(idUserInfo[n+1].user != _user){\n            UserInfo memory opponent =  idUserInfo[n+1];\n            return opponent;\n        }else{\n            return matchUser(_user);\n        }\n    }\n\n    function fetchUsers() public view returns (UserInfo[] memory) {\n        uint userCount = _userIds.current();\n        UserInfo[] memory users =  new UserInfo[](userCount);\n\n        for (uint i = 1; i <= userCount; i++) {\n            uint currentId = idUserInfo[i].userId;\n            UserInfo storage currentUser = idUserInfo[currentId];\n            users[i-1] = currentUser;\n        }\n        return users;\n    }\n\n    function onERC1155Received(address, address, uint256, uint256, bytes memory) public virtual returns (bytes4) {\n        return this.onERC1155Received.selector;\n    }\n\n    function onERC1155BatchReceived(address, address, uint256[] memory, uint256[] memory, bytes memory) public virtual returns (bytes4) {\n        return this.onERC1155BatchReceived.selector;\n    }\n\n    function onERC721Received(address, address, uint256, bytes memory) public virtual returns (bytes4) {\n        return this.onERC721Received.selector;\n    }\n}\n",
  "sourcePath": "/Users/hyenne/workspace/BEB-05-JMT/contract/contracts/MapleUser.sol",
  "ast": {
    "absolutePath": "project:/contracts/MapleUser.sol",
    "exportedSymbols": {
      "Address": [
        3673
      ],
      "Babylonian": [
        4592
      ],
      "Context": [
        3695
      ],
      "Counters": [
        3769
      ],
      "ERC1155": [
        1483
      ],
      "ERC165": [
        4019
      ],
      "ERC20": [
        2247
      ],
      "ERC721": [
        3217
      ],
      "IERC1155": [
        1605
      ],
      "IERC1155MetadataURI": [
        1661
      ],
      "IERC1155Receiver": [
        1646
      ],
      "IERC165": [
        4031
      ],
      "IERC20": [
        2325
      ],
      "IERC20Metadata": [
        2350
      ],
      "IERC721": [
        3333
      ],
      "IERC721Metadata": [
        3378
      ],
      "IERC721Receiver": [
        3351
      ],
      "JMToken": [
        5418
      ],
      "LPT": [
        5471
      ],
      "LiquidityPool": [
        6287
      ],
      "MapleUser": [
        6781
      ],
      "Math": [
        4535
      ],
      "Ownable": [
        112
      ],
      "Pausable": [
        220
      ],
      "ReentrancyGuard": [
        260
      ],
      "Strings": [
        3995
      ],
      "VJMToken": [
        7041
      ]
    },
    "id": 6782,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6289,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:25"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 6290,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6782,
        "sourceUnit": 3218,
        "src": "57:57:25",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/ERC1155.sol",
        "id": 6291,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6782,
        "sourceUnit": 1484,
        "src": "115:59:25",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
        "file": "@openzeppelin/contracts/token/ERC1155/IERC1155Receiver.sol",
        "id": 6292,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6782,
        "sourceUnit": 1647,
        "src": "175:68:25",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 6293,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6782,
        "sourceUnit": 113,
        "src": "244:52:25",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 6294,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6782,
        "sourceUnit": 3770,
        "src": "297:52:25",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "project:/contracts/JMToken.sol",
        "file": "./JMToken.sol",
        "id": 6295,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 6782,
        "sourceUnit": 5419,
        "src": "350:23:25",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 6296,
              "name": "Ownable",
              "nameLocations": [
                "397:7:25"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "397:7:25"
            },
            "id": 6297,
            "nodeType": "InheritanceSpecifier",
            "src": "397:7:25"
          }
        ],
        "canonicalName": "MapleUser",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 6781,
        "linearizedBaseContracts": [
          6781,
          112,
          3695
        ],
        "name": "MapleUser",
        "nameLocation": "384:9:25",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "global": false,
            "id": 6301,
            "libraryName": {
              "id": 6298,
              "name": "Counters",
              "nameLocations": [
                "417:8:25"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 3769,
              "src": "417:8:25"
            },
            "nodeType": "UsingForDirective",
            "src": "411:36:25",
            "typeName": {
              "id": 6300,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6299,
                "name": "Counters.Counter",
                "nameLocations": [
                  "430:8:25",
                  "439:7:25"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3701,
                "src": "430:16:25"
              },
              "referencedDeclaration": 3701,
              "src": "430:16:25",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$3701_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 6304,
            "mutability": "mutable",
            "name": "_userIds",
            "nameLocation": "477:8:25",
            "nodeType": "VariableDeclaration",
            "scope": 6781,
            "src": "452:33:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$3701_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "id": 6303,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6302,
                "name": "Counters.Counter",
                "nameLocations": [
                  "452:8:25",
                  "461:7:25"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3701,
                "src": "452:16:25"
              },
              "referencedDeclaration": 3701,
              "src": "452:16:25",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$3701_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 6309,
            "mutability": "mutable",
            "name": "decimals",
            "nameLocation": "499:8:25",
            "nodeType": "VariableDeclaration",
            "scope": 6781,
            "src": "491:25:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 6305,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "491:7:25",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "id": 6308,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "hexValue": "3130",
                "id": 6306,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "510:2:25",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_10_by_1",
                  "typeString": "int_const 10"
                },
                "value": "10"
              },
              "nodeType": "BinaryOperation",
              "operator": "**",
              "rightExpression": {
                "hexValue": "3138",
                "id": 6307,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "514:2:25",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_18_by_1",
                  "typeString": "int_const 18"
                },
                "value": "18"
              },
              "src": "510:6:25",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6312,
            "mutability": "mutable",
            "name": "token",
            "nameLocation": "538:5:25",
            "nodeType": "VariableDeclaration",
            "scope": 6781,
            "src": "522:21:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_JMToken_$5418",
              "typeString": "contract JMToken"
            },
            "typeName": {
              "id": 6311,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 6310,
                "name": "JMToken",
                "nameLocations": [
                  "522:7:25"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 5418,
                "src": "522:7:25"
              },
              "referencedDeclaration": 5418,
              "src": "522:7:25",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_JMToken_$5418",
                "typeString": "contract JMToken"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 6314,
            "mutability": "mutable",
            "name": "treasuryWallet",
            "nameLocation": "573:14:25",
            "nodeType": "VariableDeclaration",
            "scope": 6781,
            "src": "549:38:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 6313,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "549:15:25",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 6316,
            "mutability": "mutable",
            "name": "nftContractAddress",
            "nameLocation": "609:18:25",
            "nodeType": "VariableDeclaration",
            "scope": 6781,
            "src": "593:34:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6315,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "593:7:25",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 6318,
            "mutability": "mutable",
            "name": "itemContractAddress",
            "nameLocation": "649:19:25",
            "nodeType": "VariableDeclaration",
            "scope": 6781,
            "src": "633:35:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 6317,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "633:7:25",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 6345,
              "nodeType": "Block",
              "src": "849:193:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 6330,
                        "name": "_tokenContractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6320,
                        "src": "869:21:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 6329,
                      "name": "_setToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6434,
                      "src": "859:9:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$_t_bool_$",
                        "typeString": "function (address) returns (bool)"
                      }
                    },
                    "id": 6331,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "859:32:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6332,
                  "nodeType": "ExpressionStatement",
                  "src": "859:32:25"
                },
                {
                  "expression": {
                    "id": 6335,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6333,
                      "name": "nftContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6316,
                      "src": "901:18:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6334,
                      "name": "_nftContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6322,
                      "src": "922:19:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "901:40:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6336,
                  "nodeType": "ExpressionStatement",
                  "src": "901:40:25"
                },
                {
                  "expression": {
                    "id": 6339,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6337,
                      "name": "itemContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6318,
                      "src": "951:19:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6338,
                      "name": "_itemContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6324,
                      "src": "973:20:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "951:42:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 6340,
                  "nodeType": "ExpressionStatement",
                  "src": "951:42:25"
                },
                {
                  "expression": {
                    "id": 6343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6341,
                      "name": "treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6314,
                      "src": "1003:14:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6342,
                      "name": "_treasuryWallet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6326,
                      "src": "1020:15:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1003:32:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 6344,
                  "nodeType": "ExpressionStatement",
                  "src": "1003:32:25"
                }
              ]
            },
            "id": 6346,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6320,
                  "mutability": "mutable",
                  "name": "_tokenContractAddress",
                  "nameLocation": "705:21:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6346,
                  "src": "697:29:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6319,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "697:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6322,
                  "mutability": "mutable",
                  "name": "_nftContractAddress",
                  "nameLocation": "744:19:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6346,
                  "src": "736:27:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6321,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "736:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6324,
                  "mutability": "mutable",
                  "name": "_itemContractAddress",
                  "nameLocation": "781:20:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6346,
                  "src": "773:28:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6323,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "773:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6326,
                  "mutability": "mutable",
                  "name": "_treasuryWallet",
                  "nameLocation": "827:15:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6346,
                  "src": "811:31:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 6325,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:15:25",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "687:161:25"
            },
            "returnParameters": {
              "id": 6328,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "849:0:25"
            },
            "scope": 6781,
            "src": "675:367:25",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 6351,
            "mutability": "mutable",
            "name": "idUserInfo",
            "nameLocation": "1077:10:25",
            "nodeType": "VariableDeclaration",
            "scope": 6781,
            "src": "1048:39:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
              "typeString": "mapping(uint256 => struct MapleUser.UserInfo)"
            },
            "typeName": {
              "id": 6350,
              "keyType": {
                "id": 6347,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "1056:7:25",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "1048:28:25",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                "typeString": "mapping(uint256 => struct MapleUser.UserInfo)"
              },
              "valueType": {
                "id": 6349,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 6348,
                  "name": "UserInfo",
                  "nameLocations": [
                    "1067:8:25"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 6367,
                  "src": "1067:8:25"
                },
                "referencedDeclaration": 6367,
                "src": "1067:8:25",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                  "typeString": "struct MapleUser.UserInfo"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "MapleUser.Token",
            "id": 6356,
            "members": [
              {
                "constant": false,
                "id": 6353,
                "mutability": "mutable",
                "name": "contractAddr",
                "nameLocation": "1125:12:25",
                "nodeType": "VariableDeclaration",
                "scope": 6356,
                "src": "1117:20:25",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 6352,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1117:7:25",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6355,
                "mutability": "mutable",
                "name": "tokenId",
                "nameLocation": "1155:7:25",
                "nodeType": "VariableDeclaration",
                "scope": 6356,
                "src": "1147:15:25",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 6354,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1147:7:25",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Token",
            "nameLocation": "1101:5:25",
            "nodeType": "StructDefinition",
            "scope": 6781,
            "src": "1094:75:25",
            "visibility": "public"
          },
          {
            "canonicalName": "MapleUser.UserInfo",
            "id": 6367,
            "members": [
              {
                "constant": false,
                "id": 6358,
                "mutability": "mutable",
                "name": "userId",
                "nameLocation": "1209:6:25",
                "nodeType": "VariableDeclaration",
                "scope": 6367,
                "src": "1201:14:25",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 6357,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1201:7:25",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6361,
                "mutability": "mutable",
                "name": "charToken",
                "nameLocation": "1231:9:25",
                "nodeType": "VariableDeclaration",
                "scope": 6367,
                "src": "1225:15:25",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Token_$6356_storage_ptr",
                  "typeString": "struct MapleUser.Token"
                },
                "typeName": {
                  "id": 6360,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 6359,
                    "name": "Token",
                    "nameLocations": [
                      "1225:5:25"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6356,
                    "src": "1225:5:25"
                  },
                  "referencedDeclaration": 6356,
                  "src": "1225:5:25",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Token_$6356_storage_ptr",
                    "typeString": "struct MapleUser.Token"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6364,
                "mutability": "mutable",
                "name": "weaponToken",
                "nameLocation": "1256:11:25",
                "nodeType": "VariableDeclaration",
                "scope": 6367,
                "src": "1250:17:25",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Token_$6356_storage_ptr",
                  "typeString": "struct MapleUser.Token"
                },
                "typeName": {
                  "id": 6363,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 6362,
                    "name": "Token",
                    "nameLocations": [
                      "1250:5:25"
                    ],
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 6356,
                    "src": "1250:5:25"
                  },
                  "referencedDeclaration": 6356,
                  "src": "1250:5:25",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Token_$6356_storage_ptr",
                    "typeString": "struct MapleUser.Token"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 6366,
                "mutability": "mutable",
                "name": "user",
                "nameLocation": "1293:4:25",
                "nodeType": "VariableDeclaration",
                "scope": 6367,
                "src": "1277:20:25",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                },
                "typeName": {
                  "id": 6365,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1277:15:25",
                  "stateMutability": "payable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "UserInfo",
            "nameLocation": "1182:8:25",
            "nodeType": "StructDefinition",
            "scope": 6781,
            "src": "1175:129:25",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "eventSelector": "b71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d",
            "id": 6377,
            "name": "UserCreated",
            "nameLocation": "1316:11:25",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6369,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1346:6:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6377,
                  "src": "1338:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6368,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1338:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6371,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1370:8:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6377,
                  "src": "1362:16:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6370,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1362:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6373,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1396:6:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6377,
                  "src": "1388:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6372,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1388:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6375,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1420:4:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6377,
                  "src": "1412:12:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6374,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1412:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1328:102:25"
            },
            "src": "1310:121:25"
          },
          {
            "anonymous": false,
            "eventSelector": "cf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b",
            "id": 6387,
            "name": "UserUpdated",
            "nameLocation": "1443:11:25",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6386,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6379,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1473:6:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6387,
                  "src": "1465:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6378,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1465:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6381,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1497:8:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6387,
                  "src": "1489:16:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1489:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6383,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1523:6:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6387,
                  "src": "1515:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6382,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1515:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6385,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1547:4:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6387,
                  "src": "1539:12:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1539:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1455:102:25"
            },
            "src": "1437:121:25"
          },
          {
            "anonymous": false,
            "eventSelector": "42674543ab0f3f2c815bc05dfda759e3d9116ad967c6a33989f9a4f085b529e4",
            "id": 6397,
            "name": "UserMatching",
            "nameLocation": "1570:12:25",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6389,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1601:6:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6397,
                  "src": "1593:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6391,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1625:8:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6397,
                  "src": "1617:16:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6390,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1617:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6393,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1651:6:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6397,
                  "src": "1643:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6392,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1643:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6395,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1675:4:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6397,
                  "src": "1667:12:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6394,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1667:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1583:102:25"
            },
            "src": "1564:122:25"
          },
          {
            "anonymous": false,
            "eventSelector": "7a7c6948c6a3db8d1413aaffd01a9e07bc53d55489bcfe45cb5f45b703b1977a",
            "id": 6407,
            "name": "UserDeleated",
            "nameLocation": "1698:12:25",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 6406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6399,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "charId",
                  "nameLocation": "1729:6:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6407,
                  "src": "1721:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1721:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6401,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "weaponId",
                  "nameLocation": "1753:8:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6407,
                  "src": "1745:16:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6400,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1745:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6403,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "userId",
                  "nameLocation": "1779:6:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6407,
                  "src": "1771:14:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6402,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1771:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6405,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1803:4:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6407,
                  "src": "1795:12:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6404,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1795:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1711:102:25"
            },
            "src": "1692:122:25"
          },
          {
            "body": {
              "id": 6433,
              "nodeType": "Block",
              "src": "1895:116:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 6422,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 6417,
                          "name": "_tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6409,
                          "src": "1913:13:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "307830",
                              "id": 6420,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1938:3:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0x0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 6419,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1930:7:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 6418,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1930:7:25",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 6421,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1930:12:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1913:29:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 6416,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "1905:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 6423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1905:38:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6424,
                  "nodeType": "ExpressionStatement",
                  "src": "1905:38:25"
                },
                {
                  "expression": {
                    "id": 6429,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6425,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6312,
                      "src": "1953:5:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$5418",
                        "typeString": "contract JMToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 6427,
                          "name": "_tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6409,
                          "src": "1969:13:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 6426,
                        "name": "JMToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5418,
                        "src": "1961:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_JMToken_$5418_$",
                          "typeString": "type(contract JMToken)"
                        }
                      },
                      "id": 6428,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1961:22:25",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_JMToken_$5418",
                        "typeString": "contract JMToken"
                      }
                    },
                    "src": "1953:30:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_JMToken_$5418",
                      "typeString": "contract JMToken"
                    }
                  },
                  "id": 6430,
                  "nodeType": "ExpressionStatement",
                  "src": "1953:30:25"
                },
                {
                  "expression": {
                    "hexValue": "74727565",
                    "id": 6431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2000:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 6415,
                  "id": 6432,
                  "nodeType": "Return",
                  "src": "1993:11:25"
                }
              ]
            },
            "id": 6434,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 6412,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 6411,
                  "name": "onlyOwner",
                  "nameLocations": [
                    "1870:9:25"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 31,
                  "src": "1870:9:25"
                },
                "nodeType": "ModifierInvocation",
                "src": "1870:9:25"
              }
            ],
            "name": "_setToken",
            "nameLocation": "1829:9:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6410,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6409,
                  "mutability": "mutable",
                  "name": "_tokenAddress",
                  "nameLocation": "1847:13:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6434,
                  "src": "1839:21:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6408,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1839:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1838:23:25"
            },
            "returnParameters": {
              "id": 6415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6414,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6434,
                  "src": "1889:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6413,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1889:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1888:6:25"
            },
            "scope": 6781,
            "src": "1820:191:25",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 6508,
              "nodeType": "Block",
              "src": "2098:824:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 6450,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 6442,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "2116:3:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 6443,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2120:6:25",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "2116:10:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [
                            {
                              "id": 6448,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6436,
                              "src": "2165:7:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 6445,
                                  "name": "nftContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6316,
                                  "src": "2137:18:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 6444,
                                "name": "ERC721",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3217,
                                "src": "2130:6:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC721_$3217_$",
                                  "typeString": "type(contract ERC721)"
                                }
                              },
                              "id": 6446,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2130:26:25",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721_$3217",
                                "typeString": "contract ERC721"
                              }
                            },
                            "id": 6447,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2157:7:25",
                            "memberName": "ownerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2496,
                            "src": "2130:34:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view external returns (address)"
                            }
                          },
                          "id": 6449,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2130:43:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2116:57:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e207570",
                        "id": 6451,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2176:35:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        },
                        "value": "only character owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        }
                      ],
                      "id": 6441,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2108:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 6452,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2108:104:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6453,
                  "nodeType": "ExpressionStatement",
                  "src": "2108:104:25"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 6464,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 6459,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "2269:3:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 6460,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2273:6:25",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2269:10:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6461,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6438,
                              "src": "2281:9:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 6456,
                                  "name": "itemContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6318,
                                  "src": "2238:19:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 6455,
                                "name": "ERC1155",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1483,
                                "src": "2230:7:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC1155_$1483_$",
                                  "typeString": "type(contract ERC1155)"
                                }
                              },
                              "id": 6457,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2230:28:25",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC1155_$1483",
                                "typeString": "contract ERC1155"
                              }
                            },
                            "id": 6458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2259:9:25",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 376,
                            "src": "2230:38:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (address,uint256) view external returns (uint256)"
                            }
                          },
                          "id": 6462,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2230:61:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 6463,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2293:1:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2230:64:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207369676e207570",
                        "id": 6465,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2297:32:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf",
                          "typeString": "literal_string \"only weapon owners can sign up\""
                        },
                        "value": "only weapon owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9abfea7a1838e9b21b5acd87e6e61e6c5f51e3820429df0deb6f66d62e149bcf",
                          "typeString": "literal_string \"only weapon owners can sign up\""
                        }
                      ],
                      "id": 6454,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "2222:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 6466,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2222:108:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6467,
                  "nodeType": "ExpressionStatement",
                  "src": "2222:108:25"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 6468,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6304,
                        "src": "2341:8:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$3701_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 6470,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2350:9:25",
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3727,
                      "src": "2341:18:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$3701_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$3701_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 6471,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2341:20:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6472,
                  "nodeType": "ExpressionStatement",
                  "src": "2341:20:25"
                },
                {
                  "assignments": [
                    6474
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6474,
                      "mutability": "mutable",
                      "name": "userId",
                      "nameLocation": "2379:6:25",
                      "nodeType": "VariableDeclaration",
                      "scope": 6508,
                      "src": "2371:14:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6473,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2371:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6478,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 6475,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6304,
                        "src": "2388:8:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$3701_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 6476,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2397:7:25",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3713,
                      "src": "2388:16:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$3701_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$3701_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 6477,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2388:18:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2371:35:25"
                },
                {
                  "expression": {
                    "id": 6498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 6479,
                        "name": "idUserInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6351,
                        "src": "2417:10:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                          "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                        }
                      },
                      "id": 6481,
                      "indexExpression": {
                        "id": 6480,
                        "name": "userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6474,
                        "src": "2428:6:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2417:18:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                        "typeString": "struct MapleUser.UserInfo storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 6483,
                          "name": "userId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6474,
                          "src": "2469:6:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 6485,
                              "name": "nftContractAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6316,
                              "src": "2538:18:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6486,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6436,
                              "src": "2583:7:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 6484,
                            "name": "Token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6356,
                            "src": "2500:5:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Token_$6356_storage_ptr_$",
                              "typeString": "type(struct MapleUser.Token storage pointer)"
                            }
                          },
                          "id": 6487,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "nameLocations": [
                            "2524:12:25",
                            "2574:7:25"
                          ],
                          "names": [
                            "contractAddr",
                            "tokenId"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "2500:105:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$6356_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "id": 6489,
                              "name": "itemContractAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6318,
                              "src": "2670:19:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6490,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6438,
                              "src": "2716:9:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 6488,
                            "name": "Token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6356,
                            "src": "2632:5:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_struct$_Token_$6356_storage_ptr_$",
                              "typeString": "type(struct MapleUser.Token storage pointer)"
                            }
                          },
                          "id": 6491,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "structConstructorCall",
                          "lValueRequested": false,
                          "nameLocations": [
                            "2656:12:25",
                            "2707:7:25"
                          ],
                          "names": [
                            "contractAddr",
                            "tokenId"
                          ],
                          "nodeType": "FunctionCall",
                          "src": "2632:108:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$6356_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 6494,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "2768:3:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 6495,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2772:6:25",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2768:10:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 6493,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2760:8:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_payable_$",
                              "typeString": "type(address payable)"
                            },
                            "typeName": {
                              "id": 6492,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2760:8:25",
                              "stateMutability": "payable",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 6496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2760:19:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_struct$_Token_$6356_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          },
                          {
                            "typeIdentifier": "t_struct$_Token_$6356_memory_ptr",
                            "typeString": "struct MapleUser.Token memory"
                          },
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 6482,
                        "name": "UserInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6367,
                        "src": "2438:8:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_UserInfo_$6367_storage_ptr_$",
                          "typeString": "type(struct MapleUser.UserInfo storage pointer)"
                        }
                      },
                      "id": 6497,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "2461:6:25",
                        "2489:9:25",
                        "2619:11:25",
                        "2754:4:25"
                      ],
                      "names": [
                        "userId",
                        "charToken",
                        "weaponToken",
                        "user"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "2438:352:25",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$6367_memory_ptr",
                        "typeString": "struct MapleUser.UserInfo memory"
                      }
                    },
                    "src": "2417:373:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                      "typeString": "struct MapleUser.UserInfo storage ref"
                    }
                  },
                  "id": 6499,
                  "nodeType": "ExpressionStatement",
                  "src": "2417:373:25"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 6501,
                        "name": "_charId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6436,
                        "src": "2831:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 6502,
                        "name": "_weaponId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6438,
                        "src": "2852:9:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 6503,
                        "name": "userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6474,
                        "src": "2875:6:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 6504,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "2895:3:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6505,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2899:6:25",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2895:10:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 6500,
                      "name": "UserCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6377,
                      "src": "2806:11:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,address)"
                      }
                    },
                    "id": 6506,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2806:109:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6507,
                  "nodeType": "EmitStatement",
                  "src": "2801:114:25"
                }
              ]
            },
            "functionSelector": "aeeda6bf",
            "id": 6509,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "signUp",
            "nameLocation": "2026:6:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6439,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6436,
                  "mutability": "mutable",
                  "name": "_charId",
                  "nameLocation": "2050:7:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6509,
                  "src": "2042:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6435,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2042:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6438,
                  "mutability": "mutable",
                  "name": "_weaponId",
                  "nameLocation": "2075:9:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6509,
                  "src": "2067:17:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2067:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2032:58:25"
            },
            "returnParameters": {
              "id": 6440,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2098:0:25"
            },
            "scope": 6781,
            "src": "2017:905:25",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6549,
              "nodeType": "Block",
              "src": "3011:335:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 6525,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 6517,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "3029:3:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 6518,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3033:6:25",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3029:10:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "arguments": [
                            {
                              "id": 6523,
                              "name": "_charId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6511,
                              "src": "3078:7:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 6520,
                                  "name": "nftContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6316,
                                  "src": "3050:18:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 6519,
                                "name": "ERC721",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 3217,
                                "src": "3043:6:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC721_$3217_$",
                                  "typeString": "type(contract ERC721)"
                                }
                              },
                              "id": 6521,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3043:26:25",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC721_$3217",
                                "typeString": "contract ERC721"
                              }
                            },
                            "id": 6522,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3070:7:25",
                            "memberName": "ownerOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 2496,
                            "src": "3043:34:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_address_$",
                              "typeString": "function (uint256) view external returns (address)"
                            }
                          },
                          "id": 6524,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3043:43:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3029:57:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920636861726163746572206f776e6572732063616e207369676e207570",
                        "id": 6526,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3089:35:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        },
                        "value": "only character owners can sign up"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_83713b9b24cd23a0cf8b29a6781c7948915eec658b8b5ae22fbd763cc013108f",
                          "typeString": "literal_string \"only character owners can sign up\""
                        }
                      ],
                      "id": 6516,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3021:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 6527,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3021:104:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6528,
                  "nodeType": "ExpressionStatement",
                  "src": "3021:104:25"
                },
                {
                  "expression": {
                    "id": 6535,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 6529,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6351,
                            "src": "3136:10:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                              "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 6531,
                          "indexExpression": {
                            "id": 6530,
                            "name": "_userId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6513,
                            "src": "3147:7:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3136:19:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "id": 6532,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3156:9:25",
                        "memberName": "charToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6361,
                        "src": "3136:29:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Token_$6356_storage",
                          "typeString": "struct MapleUser.Token storage ref"
                        }
                      },
                      "id": 6533,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3166:7:25",
                      "memberName": "tokenId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6355,
                      "src": "3136:37:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6534,
                      "name": "_charId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6511,
                      "src": "3176:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3136:47:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6536,
                  "nodeType": "ExpressionStatement",
                  "src": "3136:47:25"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 6538,
                        "name": "_charId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6511,
                        "src": "3224:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 6539,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6351,
                              "src": "3245:10:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                                "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 6541,
                            "indexExpression": {
                              "id": 6540,
                              "name": "_userId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6513,
                              "src": "3256:7:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3245:19:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 6542,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3265:11:25",
                          "memberName": "weaponToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6364,
                          "src": "3245:31:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$6356_storage",
                            "typeString": "struct MapleUser.Token storage ref"
                          }
                        },
                        "id": 6543,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3277:7:25",
                        "memberName": "tokenId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6355,
                        "src": "3245:39:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 6544,
                        "name": "_userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6513,
                        "src": "3298:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 6545,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3319:3:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6546,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3323:6:25",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3319:10:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 6537,
                      "name": "UserUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6387,
                      "src": "3199:11:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,address)"
                      }
                    },
                    "id": 6547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3199:140:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6548,
                  "nodeType": "EmitStatement",
                  "src": "3194:145:25"
                }
              ]
            },
            "functionSelector": "5c7dec1b",
            "id": 6550,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateChar",
            "nameLocation": "2937:10:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6511,
                  "mutability": "mutable",
                  "name": "_charId",
                  "nameLocation": "2965:7:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6550,
                  "src": "2957:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2957:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6513,
                  "mutability": "mutable",
                  "name": "_userId",
                  "nameLocation": "2990:7:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6550,
                  "src": "2982:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6512,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2982:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2947:56:25"
            },
            "returnParameters": {
              "id": 6515,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3011:0:25"
            },
            "scope": 6781,
            "src": "2928:418:25",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6591,
              "nodeType": "Block",
              "src": "3439:351:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 6567,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 6562,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "3496:3:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 6563,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3500:6:25",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3496:10:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 6564,
                              "name": "_weaponId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6552,
                              "src": "3508:9:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "id": 6559,
                                  "name": "itemContractAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6318,
                                  "src": "3465:19:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 6558,
                                "name": "ERC1155",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1483,
                                "src": "3457:7:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC1155_$1483_$",
                                  "typeString": "type(contract ERC1155)"
                                }
                              },
                              "id": 6560,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3457:28:25",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC1155_$1483",
                                "typeString": "contract ERC1155"
                              }
                            },
                            "id": 6561,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3486:9:25",
                            "memberName": "balanceOf",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 376,
                            "src": "3457:38:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (address,uint256) view external returns (uint256)"
                            }
                          },
                          "id": 6565,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3457:61:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 6566,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3520:1:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "3457:64:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "6f6e6c7920776561706f6e206f776e6572732063616e207570646174652075736572496e666f",
                        "id": 6568,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3524:40:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af",
                          "typeString": "literal_string \"only weapon owners can update userInfo\""
                        },
                        "value": "only weapon owners can update userInfo"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_b0fe3178bf6775920488275d1750f1843a0b30545c0744042557cc3e471381af",
                          "typeString": "literal_string \"only weapon owners can update userInfo\""
                        }
                      ],
                      "id": 6557,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3449:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 6569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3449:116:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6570,
                  "nodeType": "ExpressionStatement",
                  "src": "3449:116:25"
                },
                {
                  "expression": {
                    "id": 6577,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "expression": {
                          "baseExpression": {
                            "id": 6571,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6351,
                            "src": "3576:10:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                              "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 6573,
                          "indexExpression": {
                            "id": 6572,
                            "name": "_userId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6554,
                            "src": "3587:7:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "3576:19:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "id": 6574,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3596:11:25",
                        "memberName": "weaponToken",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6364,
                        "src": "3576:31:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Token_$6356_storage",
                          "typeString": "struct MapleUser.Token storage ref"
                        }
                      },
                      "id": 6575,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3608:7:25",
                      "memberName": "tokenId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6355,
                      "src": "3576:39:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 6576,
                      "name": "_weaponId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6552,
                      "src": "3618:9:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3576:51:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6578,
                  "nodeType": "ExpressionStatement",
                  "src": "3576:51:25"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "baseExpression": {
                              "id": 6580,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6351,
                              "src": "3668:10:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                                "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 6582,
                            "indexExpression": {
                              "id": 6581,
                              "name": "_userId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6554,
                              "src": "3679:7:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3668:19:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 6583,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3688:9:25",
                          "memberName": "charToken",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6361,
                          "src": "3668:29:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Token_$6356_storage",
                            "typeString": "struct MapleUser.Token storage ref"
                          }
                        },
                        "id": 6584,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3698:7:25",
                        "memberName": "tokenId",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6355,
                        "src": "3668:37:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 6585,
                        "name": "_weaponId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6552,
                        "src": "3719:9:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 6586,
                        "name": "_userId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6554,
                        "src": "3742:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 6587,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "3763:3:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 6588,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3767:6:25",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "3763:10:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 6579,
                      "name": "UserUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6387,
                      "src": "3643:11:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,address)"
                      }
                    },
                    "id": 6589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3643:140:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6590,
                  "nodeType": "EmitStatement",
                  "src": "3638:145:25"
                }
              ]
            },
            "functionSelector": "36b18165",
            "id": 6592,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateWeapon",
            "nameLocation": "3361:12:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6552,
                  "mutability": "mutable",
                  "name": "_weaponId",
                  "nameLocation": "3391:9:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6592,
                  "src": "3383:17:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6551,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3383:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6554,
                  "mutability": "mutable",
                  "name": "_userId",
                  "nameLocation": "3418:7:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6592,
                  "src": "3410:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6553,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3410:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3373:58:25"
            },
            "returnParameters": {
              "id": 6556,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3439:0:25"
            },
            "scope": 6781,
            "src": "3352:438:25",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6657,
              "nodeType": "Block",
              "src": "3868:403:25",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 6605,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 6601,
                              "name": "_userIds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6304,
                              "src": "3886:8:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Counter_$3701_storage",
                                "typeString": "struct Counters.Counter storage ref"
                              }
                            },
                            "id": 6602,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3895:7:25",
                            "memberName": "current",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3713,
                            "src": "3886:16:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$3701_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$3701_storage_ptr_$",
                              "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                            }
                          },
                          "id": 6603,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3886:18:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "hexValue": "31",
                          "id": 6604,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3906:1:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "3886:21:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "796f752061726520746865206f6e6c79206f6e6520706c61796572",
                        "id": 6606,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3909:29:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf",
                          "typeString": "literal_string \"you are the only one player\""
                        },
                        "value": "you are the only one player"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_06c7266a375a0b7849b454e6c13ab1c26263d1dc67aeec645a7b8f63d86a6ddf",
                          "typeString": "literal_string \"you are the only one player\""
                        }
                      ],
                      "id": 6600,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        4294967278,
                        4294967278
                      ],
                      "referencedDeclaration": 4294967278,
                      "src": "3878:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 6607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3878:61:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 6608,
                  "nodeType": "ExpressionStatement",
                  "src": "3878:61:25"
                },
                {
                  "assignments": [
                    6610
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6610,
                      "mutability": "mutable",
                      "name": "userCount",
                      "nameLocation": "3954:9:25",
                      "nodeType": "VariableDeclaration",
                      "scope": 6657,
                      "src": "3949:14:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6609,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3949:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6614,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 6611,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6304,
                        "src": "3966:8:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$3701_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 6612,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3975:7:25",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3713,
                      "src": "3966:16:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$3701_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$3701_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 6613,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3966:18:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3949:35:25"
                },
                {
                  "assignments": [
                    6616
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6616,
                      "mutability": "mutable",
                      "name": "n",
                      "nameLocation": "4002:1:25",
                      "nodeType": "VariableDeclaration",
                      "scope": 6657,
                      "src": "3994:9:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6615,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3994:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6630,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6629,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 6622,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967292,
                                    "src": "4041:5:25",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 6623,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "4047:9:25",
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "src": "4041:15:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "id": 6620,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967295,
                                  "src": "4024:3:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 6621,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "4028:12:25",
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "4024:16:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 6624,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4024:33:25",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 6619,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967288,
                            "src": "4014:9:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 6625,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4014:44:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 6618,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "4006:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 6617,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "4006:7:25",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 6626,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4006:53:25",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "components": [
                        {
                          "id": 6627,
                          "name": "userCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6610,
                          "src": "4063:9:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 6628,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "4062:11:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4006:67:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3994:79:25"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 6638,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 6631,
                          "name": "idUserInfo",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6351,
                          "src": "4086:10:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                            "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                          }
                        },
                        "id": 6635,
                        "indexExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 6634,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 6632,
                            "name": "n",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6616,
                            "src": "4097:1:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 6633,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4099:1:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "4097:3:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "4086:15:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                          "typeString": "struct MapleUser.UserInfo storage ref"
                        }
                      },
                      "id": 6636,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4102:4:25",
                      "memberName": "user",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6366,
                      "src": "4086:20:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "id": 6637,
                      "name": "_user",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6594,
                      "src": "4110:5:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "4086:29:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 6655,
                    "nodeType": "Block",
                    "src": "4217:48:25",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 6652,
                              "name": "_user",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6594,
                              "src": "4248:5:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 6651,
                            "name": "matchUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6658,
                            "src": "4238:9:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_struct$_UserInfo_$6367_memory_ptr_$",
                              "typeString": "function (address) view returns (struct MapleUser.UserInfo memory)"
                            }
                          },
                          "id": 6653,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4238:16:25",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "functionReturnParameters": 6599,
                        "id": 6654,
                        "nodeType": "Return",
                        "src": "4231:23:25"
                      }
                    ]
                  },
                  "id": 6656,
                  "nodeType": "IfStatement",
                  "src": "4083:182:25",
                  "trueBody": {
                    "id": 6650,
                    "nodeType": "Block",
                    "src": "4116:97:25",
                    "statements": [
                      {
                        "assignments": [
                          6641
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6641,
                            "mutability": "mutable",
                            "name": "opponent",
                            "nameLocation": "4146:8:25",
                            "nodeType": "VariableDeclaration",
                            "scope": 6650,
                            "src": "4130:24:25",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$6367_memory_ptr",
                              "typeString": "struct MapleUser.UserInfo"
                            },
                            "typeName": {
                              "id": 6640,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 6639,
                                "name": "UserInfo",
                                "nameLocations": [
                                  "4130:8:25"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 6367,
                                "src": "4130:8:25"
                              },
                              "referencedDeclaration": 6367,
                              "src": "4130:8:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                                "typeString": "struct MapleUser.UserInfo"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6647,
                        "initialValue": {
                          "baseExpression": {
                            "id": 6642,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6351,
                            "src": "4158:10:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                              "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 6646,
                          "indexExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 6645,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 6643,
                              "name": "n",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6616,
                              "src": "4169:1:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "hexValue": "31",
                              "id": 6644,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4171:1:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_1_by_1",
                                "typeString": "int_const 1"
                              },
                              "value": "1"
                            },
                            "src": "4169:3:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4158:15:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4130:43:25"
                      },
                      {
                        "expression": {
                          "id": 6648,
                          "name": "opponent",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6641,
                          "src": "4194:8:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "functionReturnParameters": 6599,
                        "id": 6649,
                        "nodeType": "Return",
                        "src": "4187:15:25"
                      }
                    ]
                  }
                }
              ]
            },
            "functionSelector": "da56ef3a",
            "id": 6658,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "matchUser",
            "nameLocation": "3805:9:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6594,
                  "mutability": "mutable",
                  "name": "_user",
                  "nameLocation": "3823:5:25",
                  "nodeType": "VariableDeclaration",
                  "scope": 6658,
                  "src": "3815:13:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6593,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3815:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3814:15:25"
            },
            "returnParameters": {
              "id": 6599,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6598,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6658,
                  "src": "3851:15:25",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_UserInfo_$6367_memory_ptr",
                    "typeString": "struct MapleUser.UserInfo"
                  },
                  "typeName": {
                    "id": 6597,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6596,
                      "name": "UserInfo",
                      "nameLocations": [
                        "3851:8:25"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6367,
                      "src": "3851:8:25"
                    },
                    "referencedDeclaration": 6367,
                    "src": "3851:8:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                      "typeString": "struct MapleUser.UserInfo"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3850:17:25"
            },
            "scope": 6781,
            "src": "3796:475:25",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6719,
              "nodeType": "Block",
              "src": "4339:350:25",
              "statements": [
                {
                  "assignments": [
                    6666
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6666,
                      "mutability": "mutable",
                      "name": "userCount",
                      "nameLocation": "4354:9:25",
                      "nodeType": "VariableDeclaration",
                      "scope": 6719,
                      "src": "4349:14:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6665,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4349:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6670,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 6667,
                        "name": "_userIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6304,
                        "src": "4366:8:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$3701_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 6668,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4375:7:25",
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3713,
                      "src": "4366:16:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$3701_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$3701_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 6669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4366:18:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4349:35:25"
                },
                {
                  "assignments": [
                    6675
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6675,
                      "mutability": "mutable",
                      "name": "users",
                      "nameLocation": "4412:5:25",
                      "nodeType": "VariableDeclaration",
                      "scope": 6719,
                      "src": "4394:23:25",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct MapleUser.UserInfo[]"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 6673,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 6672,
                            "name": "UserInfo",
                            "nameLocations": [
                              "4394:8:25"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 6367,
                            "src": "4394:8:25"
                          },
                          "referencedDeclaration": 6367,
                          "src": "4394:8:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                            "typeString": "struct MapleUser.UserInfo"
                          }
                        },
                        "id": 6674,
                        "nodeType": "ArrayTypeName",
                        "src": "4394:10:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_UserInfo_$6367_storage_$dyn_storage_ptr",
                          "typeString": "struct MapleUser.UserInfo[]"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6682,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 6680,
                        "name": "userCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6666,
                        "src": "4436:9:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 6679,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "4421:14:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (struct MapleUser.UserInfo memory[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 6677,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 6676,
                            "name": "UserInfo",
                            "nameLocations": [
                              "4425:8:25"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 6367,
                            "src": "4425:8:25"
                          },
                          "referencedDeclaration": 6367,
                          "src": "4425:8:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                            "typeString": "struct MapleUser.UserInfo"
                          }
                        },
                        "id": 6678,
                        "nodeType": "ArrayTypeName",
                        "src": "4425:10:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_UserInfo_$6367_storage_$dyn_storage_ptr",
                          "typeString": "struct MapleUser.UserInfo[]"
                        }
                      }
                    },
                    "id": 6681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4421:25:25",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct MapleUser.UserInfo memory[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4394:52:25"
                },
                {
                  "body": {
                    "id": 6715,
                    "nodeType": "Block",
                    "src": "4495:166:25",
                    "statements": [
                      {
                        "assignments": [
                          6694
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6694,
                            "mutability": "mutable",
                            "name": "currentId",
                            "nameLocation": "4514:9:25",
                            "nodeType": "VariableDeclaration",
                            "scope": 6715,
                            "src": "4509:14:25",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 6693,
                              "name": "uint",
                              "nodeType": "ElementaryTypeName",
                              "src": "4509:4:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6699,
                        "initialValue": {
                          "expression": {
                            "baseExpression": {
                              "id": 6695,
                              "name": "idUserInfo",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6351,
                              "src": "4526:10:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                                "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                              }
                            },
                            "id": 6697,
                            "indexExpression": {
                              "id": 6696,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6684,
                              "src": "4537:1:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4526:13:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                              "typeString": "struct MapleUser.UserInfo storage ref"
                            }
                          },
                          "id": 6698,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4540:6:25",
                          "memberName": "userId",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 6358,
                          "src": "4526:20:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4509:37:25"
                      },
                      {
                        "assignments": [
                          6702
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6702,
                            "mutability": "mutable",
                            "name": "currentUser",
                            "nameLocation": "4577:11:25",
                            "nodeType": "VariableDeclaration",
                            "scope": 6715,
                            "src": "4560:28:25",
                            "stateVariable": false,
                            "storageLocation": "storage",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                              "typeString": "struct MapleUser.UserInfo"
                            },
                            "typeName": {
                              "id": 6701,
                              "nodeType": "UserDefinedTypeName",
                              "pathNode": {
                                "id": 6700,
                                "name": "UserInfo",
                                "nameLocations": [
                                  "4560:8:25"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 6367,
                                "src": "4560:8:25"
                              },
                              "referencedDeclaration": 6367,
                              "src": "4560:8:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                                "typeString": "struct MapleUser.UserInfo"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6706,
                        "initialValue": {
                          "baseExpression": {
                            "id": 6703,
                            "name": "idUserInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6351,
                            "src": "4591:10:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_UserInfo_$6367_storage_$",
                              "typeString": "mapping(uint256 => struct MapleUser.UserInfo storage ref)"
                            }
                          },
                          "id": 6705,
                          "indexExpression": {
                            "id": 6704,
                            "name": "currentId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6694,
                            "src": "4602:9:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4591:21:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_storage",
                            "typeString": "struct MapleUser.UserInfo storage ref"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4560:52:25"
                      },
                      {
                        "expression": {
                          "id": 6713,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "baseExpression": {
                              "id": 6707,
                              "name": "users",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6675,
                              "src": "4626:5:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr",
                                "typeString": "struct MapleUser.UserInfo memory[] memory"
                              }
                            },
                            "id": 6711,
                            "indexExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 6710,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 6708,
                                "name": "i",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6684,
                                "src": "4632:1:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 6709,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4634:1:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "4632:3:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "4626:10:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$6367_memory_ptr",
                              "typeString": "struct MapleUser.UserInfo memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 6712,
                            "name": "currentUser",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6702,
                            "src": "4639:11:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                              "typeString": "struct MapleUser.UserInfo storage pointer"
                            }
                          },
                          "src": "4626:24:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_UserInfo_$6367_memory_ptr",
                            "typeString": "struct MapleUser.UserInfo memory"
                          }
                        },
                        "id": 6714,
                        "nodeType": "ExpressionStatement",
                        "src": "4626:24:25"
                      }
                    ]
                  },
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 6687,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6684,
                      "src": "4474:1:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "id": 6688,
                      "name": "userCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6666,
                      "src": "4479:9:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4474:14:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6716,
                  "initializationExpression": {
                    "assignments": [
                      6684
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 6684,
                        "mutability": "mutable",
                        "name": "i",
                        "nameLocation": "4467:1:25",
                        "nodeType": "VariableDeclaration",
                        "scope": 6716,
                        "src": "4462:6:25",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 6683,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4462:4:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 6686,
                    "initialValue": {
                      "hexValue": "31",
                      "id": 6685,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4471:1:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4462:10:25"
                  },
                  "loopExpression": {
                    "expression": {
                      "id": 6691,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4490:3:25",
                      "subExpression": {
                        "id": 6690,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6684,
                        "src": "4490:1:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 6692,
                    "nodeType": "ExpressionStatement",
                    "src": "4490:3:25"
                  },
                  "nodeType": "ForStatement",
                  "src": "4457:204:25"
                },
                {
                  "expression": {
                    "id": 6717,
                    "name": "users",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6675,
                    "src": "4677:5:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct MapleUser.UserInfo memory[] memory"
                    }
                  },
                  "functionReturnParameters": 6664,
                  "id": 6718,
                  "nodeType": "Return",
                  "src": "4670:12:25"
                }
              ]
            },
            "functionSelector": "bfcad433",
            "id": 6720,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "fetchUsers",
            "nameLocation": "4286:10:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6659,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4296:2:25"
            },
            "returnParameters": {
              "id": 6664,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6663,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6720,
                  "src": "4320:17:25",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_UserInfo_$6367_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct MapleUser.UserInfo[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6661,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 6660,
                        "name": "UserInfo",
                        "nameLocations": [
                          "4320:8:25"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 6367,
                        "src": "4320:8:25"
                      },
                      "referencedDeclaration": 6367,
                      "src": "4320:8:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_UserInfo_$6367_storage_ptr",
                        "typeString": "struct MapleUser.UserInfo"
                      }
                    },
                    "id": 6662,
                    "nodeType": "ArrayTypeName",
                    "src": "4320:10:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_UserInfo_$6367_storage_$dyn_storage_ptr",
                      "typeString": "struct MapleUser.UserInfo[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4319:19:25"
            },
            "scope": 6781,
            "src": "4277:412:25",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6739,
              "nodeType": "Block",
              "src": "4804:55:25",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 6735,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "4821:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$6781",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 6736,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4826:17:25",
                      "memberName": "onERC1155Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6740,
                      "src": "4821:22:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 6737,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "4844:8:25",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "4821:31:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 6734,
                  "id": 6738,
                  "nodeType": "Return",
                  "src": "4814:38:25"
                }
              ]
            },
            "functionSelector": "f23a6e61",
            "id": 6740,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155Received",
            "nameLocation": "4704:17:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6731,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6722,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6740,
                  "src": "4722:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6721,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4722:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6724,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6740,
                  "src": "4731:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6723,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4731:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6726,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6740,
                  "src": "4740:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4740:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6728,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6740,
                  "src": "4749:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4749:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6730,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6740,
                  "src": "4758:12:25",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6729,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4758:5:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4721:50:25"
            },
            "returnParameters": {
              "id": 6734,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6733,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6740,
                  "src": "4796:6:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 6732,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4796:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4795:8:25"
            },
            "scope": 6781,
            "src": "4695:164:25",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6761,
              "nodeType": "Block",
              "src": "4997:60:25",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 6757,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "5014:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$6781",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 6758,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5019:22:25",
                      "memberName": "onERC1155BatchReceived",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6762,
                      "src": "5014:27:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256[] memory,uint256[] memory,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 6759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "5042:8:25",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "5014:36:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 6756,
                  "id": 6760,
                  "nodeType": "Return",
                  "src": "5007:43:25"
                }
              ]
            },
            "functionSelector": "bc197c81",
            "id": 6762,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC1155BatchReceived",
            "nameLocation": "4874:22:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6753,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6742,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6762,
                  "src": "4897:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6741,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4897:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6744,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6762,
                  "src": "4906:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6743,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4906:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6747,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6762,
                  "src": "4915:16:25",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6745,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4915:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 6746,
                    "nodeType": "ArrayTypeName",
                    "src": "4915:9:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6750,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6762,
                  "src": "4933:16:25",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6748,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4933:7:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 6749,
                    "nodeType": "ArrayTypeName",
                    "src": "4933:9:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6752,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6762,
                  "src": "4951:12:25",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6751,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4951:5:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4896:68:25"
            },
            "returnParameters": {
              "id": 6756,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6755,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6762,
                  "src": "4989:6:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 6754,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4989:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4988:8:25"
            },
            "scope": 6781,
            "src": "4865:192:25",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6779,
              "nodeType": "Block",
              "src": "5162:54:25",
              "statements": [
                {
                  "expression": {
                    "expression": {
                      "expression": {
                        "id": 6775,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967268,
                        "src": "5179:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MapleUser_$6781",
                          "typeString": "contract MapleUser"
                        }
                      },
                      "id": 6776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5184:16:25",
                      "memberName": "onERC721Received",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6780,
                      "src": "5179:21:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$_t_bytes4_$",
                        "typeString": "function (address,address,uint256,bytes memory) external returns (bytes4)"
                      }
                    },
                    "id": 6777,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberLocation": "5201:8:25",
                    "memberName": "selector",
                    "nodeType": "MemberAccess",
                    "src": "5179:30:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "functionReturnParameters": 6774,
                  "id": 6778,
                  "nodeType": "Return",
                  "src": "5172:37:25"
                }
              ]
            },
            "functionSelector": "150b7a02",
            "id": 6780,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "onERC721Received",
            "nameLocation": "5072:16:25",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6771,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6764,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6780,
                  "src": "5089:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6763,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5089:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6766,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6780,
                  "src": "5098:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6765,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5098:7:25",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6768,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6780,
                  "src": "5107:7:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6767,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5107:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6770,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6780,
                  "src": "5116:12:25",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 6769,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5116:5:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5088:41:25"
            },
            "returnParameters": {
              "id": 6774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6773,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6780,
                  "src": "5154:6:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 6772,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "5154:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5153:8:25"
            },
            "scope": 6781,
            "src": "5063:153:25",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          }
        ],
        "scope": 6782,
        "src": "375:4843:25",
        "usedErrors": []
      }
    ],
    "src": "32:5187:25"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.17+commit.8df45f5f.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0xb71cf8dd9f35ff09f0b312ae47365f80792968af9383e6cbc7f9c12054d6cc3d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserCreated",
          "type": "event"
        },
        "0x7a7c6948c6a3db8d1413aaffd01a9e07bc53d55489bcfe45cb5f45b703b1977a": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserDeleated",
          "type": "event"
        },
        "0x42674543ab0f3f2c815bc05dfda759e3d9116ad967c6a33989f9a4f085b529e4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserMatching",
          "type": "event"
        },
        "0xcf09b7402a0a51c2c51935cd064f1c8e910da6814d49b3badcaa04c81850948b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "charId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "weaponId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "userId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "UserUpdated",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x20096560eE79933e3601bD39bFFFb1FC5053b5d5",
      "transactionHash": "0x647dcb55ee02a4e2491f172fcaf1e046618e865b4fa6d79e358f116b80cbbd0b"
    }
  },
  "schemaVersion": "3.4.9",
  "updatedAt": "2022-09-26T21:45:18.116Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}

module.exports = USER;