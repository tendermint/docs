(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{754:function(e,t,a){"use strict";a.r(t);var i=a(1),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-009-abci-ux-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-009-abci-ux-improvements"}},[e._v("#")]),e._v(" ADR 009: ABCI UX Improvements")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p",[e._v("23-06-2018: Some minor fixes from review\n07-06-2018: Some updates based on discussion with Jae\n07-06-2018: Initial draft to match what was released in ABCI v0.11")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("The ABCI was first introduced in late 2015. It's purpose is to be:")]),e._v(" "),a("ul",[a("li",[e._v("a generic interface between state machines and their replication engines")]),e._v(" "),a("li",[e._v("agnostic to the language the state machine is written in")]),e._v(" "),a("li",[e._v("agnostic to the replication engine that drives it")])]),e._v(" "),a("p",[e._v("This means ABCI should provide an interface for both pluggable applications and\npluggable consensus engines.")]),e._v(" "),a("p",[e._v("To achieve this, it uses Protocol Buffers (proto3) for message types. The dominant\nimplementation is in Go.")]),e._v(" "),a("p",[e._v("After some recent discussions with the community on github, the following were\nidentified as pain points:")]),e._v(" "),a("ul",[a("li",[e._v("Amino encoded types")]),e._v(" "),a("li",[e._v("Managing validator sets")]),e._v(" "),a("li",[e._v("Imports in the protobuf file")])]),e._v(" "),a("p",[e._v("See the "),a("a",{attrs:{href:"#references"}},[e._v("references")]),e._v(" for more.")]),e._v(" "),a("h3",{attrs:{id:"imports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imports"}},[e._v("#")]),e._v(" Imports")]),e._v(" "),a("p",[e._v("The native proto library in Go generates inflexible and verbose code.\nMany in the Go community have adopted a fork called\n"),a("a",{attrs:{href:"https://github.com/gogo/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogoproto"),a("OutboundLink")],1),e._v(" that provides a\nvariety of features aimed to improve the developer experience.\nWhile "),a("code",[e._v("gogoproto")]),e._v(" is nice, it creates an additional dependency, and compiling\nthe protobuf types for other languages has been reported to fail when "),a("code",[e._v("gogoproto")]),e._v(" is used.")]),e._v(" "),a("h3",{attrs:{id:"amino"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amino"}},[e._v("#")]),e._v(" Amino")]),e._v(" "),a("p",[e._v("Amino is an encoding protocol designed to improve over insufficiencies of protobuf.\nIt's goal is to be proto4.")]),e._v(" "),a("p",[e._v("Many people are frustrated by incompatibility with protobuf,\nand with the requirement for Amino to be used at all within ABCI.")]),e._v(" "),a("p",[e._v("We intend to make Amino successful enough that we can eventually use it for ABCI\nmessage types directly. By then it should be called proto4. In the meantime,\nwe want it to be easy to use.")]),e._v(" "),a("h3",{attrs:{id:"pubkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pubkey"}},[e._v("#")]),e._v(" PubKey")]),e._v(" "),a("p",[e._v("PubKeys are encoded using Amino (and before that, go-wire).\nIdeally, PubKeys are an interface type where we don't know all the\nimplementation types, so its unfitting to use "),a("code",[e._v("oneof")]),e._v(" or "),a("code",[e._v("enum")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addresses"}},[e._v("#")]),e._v(" Addresses")]),e._v(" "),a("p",[e._v("The address for ED25519 pubkey is the RIPEMD160 of the Amino\nencoded pubkey. This introduces an Amino dependency in the address generation,\na functionality that is widely required and should be easy to compute as\npossible.")]),e._v(" "),a("h3",{attrs:{id:"validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),a("p",[e._v("To change the validator set, applications can return a list of validator updates\nwith ResponseEndBlock. In these updates, the public key "),a("em",[e._v("must")]),e._v(" be included,\nbecause Tendermint requires the public key to verify validator signatures. This\nmeans ABCI developers have to work with PubKeys. That said, it would also be\nconvenient to work with address information, and for it to be simple to do so.")]),e._v(" "),a("h3",{attrs:{id:"absentvalidators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#absentvalidators"}},[e._v("#")]),e._v(" AbsentValidators")]),e._v(" "),a("p",[e._v("Tendermint also provides a list of validators in BeginBlock who did not sign the\nlast block. This allows applications to reflect availability behaviour in the\napplication, for instance by punishing validators for not having votes included\nin commits.")]),e._v(" "),a("h3",{attrs:{id:"initchain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initchain"}},[e._v("#")]),e._v(" InitChain")]),e._v(" "),a("p",[e._v("Tendermint passes in a list of validators here, and nothing else. It would\nbenefit the application to be able to control the initial validator set. For\ninstance the genesis file could include application-based information about the\ninitial validator set that the application could process to determine the\ninitial validator set. Additionally, InitChain would benefit from getting all\nthe genesis information.")]),e._v(" "),a("h3",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" Header")]),e._v(" "),a("p",[e._v("ABCI provides the Header in RequestBeginBlock so the application can have\nimportant information about the latest state of the blockchain.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h3",{attrs:{id:"imports-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#imports-2"}},[e._v("#")]),e._v(" Imports")]),e._v(" "),a("p",[e._v("Move away from gogoproto. In the short term, we will just maintain a second\nprotobuf file without the gogoproto annotations. In the medium term, we will\nmake copies of all the structs in Golang and shuttle back and forth. In the long\nterm, we will use Amino.")]),e._v(" "),a("h3",{attrs:{id:"amino-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amino-2"}},[e._v("#")]),e._v(" Amino")]),e._v(" "),a("p",[e._v("To simplify ABCI application development in the short term,\nAmino will be completely removed from the ABCI:")]),e._v(" "),a("ul",[a("li",[e._v("It will not be required for PubKey encoding")]),e._v(" "),a("li",[e._v("It will not be required for computing PubKey addresses")])]),e._v(" "),a("p",[e._v("That said, we are working to make Amino a huge success, and to become proto4.\nTo facilitate adoption and cross-language compatibility in the near-term, Amino\nv1 will:")]),e._v(" "),a("ul",[a("li",[e._v("be fully compatible with the subset of proto3 that excludes "),a("code",[e._v("oneof")])]),e._v(" "),a("li",[e._v("use the Amino prefix system to provide interface types, as opposed to "),a("code",[e._v("oneof")]),e._v("\nstyle union types.")])]),e._v(" "),a("p",[e._v("That said, an Amino v2 will be worked on to improve the performance of the\nformat and its useability in cryptographic applications.")]),e._v(" "),a("h3",{attrs:{id:"pubkey-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pubkey-2"}},[e._v("#")]),e._v(" PubKey")]),e._v(" "),a("p",[e._v("Encoding schemes infect software. As a generic middleware, ABCI aims to have\nsome cross scheme compatibility. For this it has no choice but to include opaque\nbytes from time to time. While we will not enforce Amino encoding for these\nbytes yet, we need to provide a type system. The simplest way to do this is to\nuse a type string.")]),e._v(" "),a("p",[e._v("PubKey will now look like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBQdWJLZXkgewogICAgc3RyaW5nIHR5cGUKICAgIGJ5dGVzIGRhdGEKfQo="}}),e._v(" "),a("p",[e._v("where "),a("code",[e._v("type")]),e._v(" can be:")]),e._v(" "),a("ul",[a("li",[e._v('"ed225519", with '),a("code",[e._v("data = <raw 32-byte pubkey>")])]),e._v(" "),a("li",[e._v('"secp256k1", with '),a("code",[e._v("data = <33-byte OpenSSL compressed pubkey>")])])]),e._v(" "),a("p",[e._v("As we want to retain flexibility here, and since ideally, PubKey would be an\ninterface type, we do not use "),a("code",[e._v("enum")]),e._v(" or "),a("code",[e._v("oneof")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"addresses-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addresses-2"}},[e._v("#")]),e._v(" Addresses")]),e._v(" "),a("p",[e._v("To simplify and improve computing addresses, we change it to the first 20-bytes of the SHA256\nof the raw 32-byte public key.")]),e._v(" "),a("p",[e._v("We continue to use the Bitcoin address scheme for secp256k1 keys.")]),e._v(" "),a("h3",{attrs:{id:"validators-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators-2"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),a("p",[e._v("Add a "),a("code",[e._v("bytes address")]),e._v(" field:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBWYWxpZGF0b3IgewogICAgYnl0ZXMgYWRkcmVzcwogICAgUHViS2V5IHB1Yl9rZXkKICAgIGludDY0IHBvd2VyCn0K"}}),e._v(" "),a("h3",{attrs:{id:"requestbeginblock-and-absentvalidators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requestbeginblock-and-absentvalidators"}},[e._v("#")]),e._v(" RequestBeginBlock and AbsentValidators")]),e._v(" "),a("p",[e._v("To simplify this, RequestBeginBlock will include the complete validator set,\nincluding the address, and voting power of each validator, along\nwith a boolean for whether or not they voted:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBSZXF1ZXN0QmVnaW5CbG9jayB7CiAgYnl0ZXMgaGFzaAogIEhlYWRlciBoZWFkZXIKICBMYXN0Q29tbWl0SW5mbyBsYXN0X2NvbW1pdF9pbmZvCiAgcmVwZWF0ZWQgRXZpZGVuY2UgYnl6YW50aW5lX3ZhbGlkYXRvcnMKfQoKbWVzc2FnZSBMYXN0Q29tbWl0SW5mbyB7CiAgaW50MzIgQ29tbWl0Um91bmQKICByZXBlYXRlZCBTaWduaW5nVmFsaWRhdG9yIHZhbGlkYXRvcnMKfQoKbWVzc2FnZSBTaWduaW5nVmFsaWRhdG9yIHsKICAgIFZhbGlkYXRvciB2YWxpZGF0b3IKICAgIGJvb2wgc2lnbmVkX2xhc3RfYmxvY2sKfQo="}}),e._v(" "),a("p",[e._v("Note that in Validators in RequestBeginBlock, we DO NOT include public keys. Public keys are\nlarger than addresses and in the future, with quantum computers, will be much\nlarger. The overhead of passing them, especially during fast-sync, is\nsignificant.")]),e._v(" "),a("p",[e._v("Additional, addresses are changing to be simpler to compute, further removing\nthe need to include pubkeys here.")]),e._v(" "),a("p",[e._v("In short, ABCI developers must be aware of both addresses and public keys.")]),e._v(" "),a("h3",{attrs:{id:"responseendblock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responseendblock"}},[e._v("#")]),e._v(" ResponseEndBlock")]),e._v(" "),a("p",[e._v("Since ResponseEndBlock includes Validator, it must now include their address.")]),e._v(" "),a("h3",{attrs:{id:"initchain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initchain-2"}},[e._v("#")]),e._v(" InitChain")]),e._v(" "),a("p",[e._v("Change RequestInitChain to give the app all the information from the genesis file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBSZXF1ZXN0SW5pdENoYWluIHsKICAgIGludDY0IHRpbWUKICAgIHN0cmluZyBjaGFpbl9pZAogICAgQ29uc2Vuc3VzUGFyYW1zIGNvbnNlbnN1c19wYXJhbXMKICAgIHJlcGVhdGVkIFZhbGlkYXRvciB2YWxpZGF0b3JzCiAgICBieXRlcyBhcHBfc3RhdGVfYnl0ZXMKfQo="}}),e._v(" "),a("p",[e._v("Change ResponseInitChain to allow the app to specify the initial validator set\nand consensus parameters.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBSZXNwb25zZUluaXRDaGFpbiB7CiAgICBDb25zZW5zdXNQYXJhbXMgY29uc2Vuc3VzX3BhcmFtcwogICAgcmVwZWF0ZWQgVmFsaWRhdG9yIHZhbGlkYXRvcnMKfQo="}}),e._v(" "),a("h3",{attrs:{id:"header-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header-2"}},[e._v("#")]),e._v(" Header")]),e._v(" "),a("p",[e._v("Now that Tendermint Amino will be compatible with proto3, the Header in ABCI\nshould exactly match the Tendermint header - they will then be encoded\nidentically in ABCI and in Tendermint Core.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Implemented")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Easier for developers to build on the ABCI")]),e._v(" "),a("li",[e._v("ABCI and Tendermint headers are identically serialized")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Maintenance overhead of alternative type encoding scheme")]),e._v(" "),a("li",[e._v("Performance overhead of passing all validator info every block (at least its\nonly addresses, and not also pubkeys)")]),e._v(" "),a("li",[e._v("Maintenance overhead of duplicate types")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("ABCI developers must know about validator addresses")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tendermint/abci/blob/v0.10.3/specification.rst",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI v0.10.3 Specification (before this\nproposal)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/abci/blob/v0.11.0/specification.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI v0.11.0 Specification (implementing first draft of this\nproposal)"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/go-crypto/issues/103",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ed25519 addresses"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/abci/issues/216",target:"_blank",rel:"noopener noreferrer"}},[e._v("InitChain contains the\nGenesis"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1524",target:"_blank",rel:"noopener noreferrer"}},[e._v("PubKeys"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1605",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notes on\nHeader"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/abci/issues/256",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gogoproto issues"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tendermint/abci/issues/231",target:"_blank",rel:"noopener noreferrer"}},[e._v("Absent Validators"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);