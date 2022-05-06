(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{570:function(e,t,n){e.exports=n.p+"assets/img/abci.3542de28.png"},571:function(e,t,n){e.exports=n.p+"assets/img/consensus_logic.e9f4ca6f.png"},572:function(e,t,n){e.exports=n.p+"assets/img/tm-transaction-flow.258ca020.png"},643:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"what-is-tendermint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-tendermint"}},[e._v("#")]),e._v(" What is Tendermint")]),e._v(" "),a("p",[e._v("Tendermint is software for securely and consistently replicating an\napplication on many machines. By securely, we mean that Tendermint works\neven if up to 1/3 of machines fail in arbitrary ways. By consistently,\nwe mean that every non-faulty machine sees the same transaction log and\ncomputes the same state. Secure and consistent replication is a\nfundamental problem in distributed systems; it plays a critical role in\nthe fault tolerance of a broad range of applications, from currencies,\nto elections, to infrastructure orchestration, and beyond.")]),e._v(" "),a("p",[e._v('The ability to tolerate machines failing in arbitrary ways, including\nbecoming malicious, is known as Byzantine fault tolerance (BFT). The\ntheory of BFT is decades old, but software implementations have only\nbecame popular recently, due largely to the success of "blockchain\ntechnology" like Bitcoin and Ethereum. Blockchain technology is just a\nreformalization of BFT in a more modern setting, with emphasis on\npeer-to-peer networking and cryptographic authentication. The name\nderives from the way transactions are batched in blocks, where each\nblock contains a cryptographic hash of the previous one, forming a\nchain. In practice, the blockchain data structure actually optimizes BFT\ndesign.')]),e._v(" "),a("p",[e._v("Tendermint consists of two chief technical components: a blockchain\nconsensus engine and a generic application interface. The consensus\nengine, called Tendermint Core, ensures that the same transactions are\nrecorded on every machine in the same order. The application interface,\ncalled the Application BlockChain Interface (ABCI), enables the\ntransactions to be processed in any programming language. Unlike other\nblockchain and consensus solutions, which come pre-packaged with built\nin state machines (like a fancy key-value store, or a quirky scripting\nlanguage), developers can use Tendermint for BFT state machine\nreplication of applications written in whatever programming language and\ndevelopment environment is right for them.")]),e._v(" "),a("p",[e._v("Tendermint is designed to be easy-to-use, simple-to-understand, highly\nperformant, and useful for a wide variety of distributed applications.")]),e._v(" "),a("h2",{attrs:{id:"tendermint-vs-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-vs-x"}},[e._v("#")]),e._v(" Tendermint vs. X")]),e._v(" "),a("p",[e._v('Tendermint is broadly similar to two classes of software. The first\nclass consists of distributed key-value stores, like Zookeeper, etcd,\nand consul, which use non-BFT consensus. The second class is known as\n"blockchain technology", and consists of both cryptocurrencies like\nBitcoin and Ethereum, and alternative distributed ledger designs like\nHyperledger\'s Burrow.')]),e._v(" "),a("h3",{attrs:{id:"zookeeper-etcd-consul"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-etcd-consul"}},[e._v("#")]),e._v(" Zookeeper, etcd, consul")]),e._v(" "),a("p",[e._v("Zookeeper, etcd, and consul are all implementations of a key-value store\natop a classical, non-BFT consensus algorithm. Zookeeper uses a version\nof Paxos called Zookeeper Atomic Broadcast, while etcd and consul use\nthe Raft consensus algorithm, which is much younger and simpler. A\ntypical cluster contains 3-5 machines, and can tolerate crash failures\nin up to 1/2 of the machines, but even a single Byzantine fault can\ndestroy the system.")]),e._v(" "),a("p",[e._v("Each offering provides a slightly different implementation of a\nfeatureful key-value store, but all are generally focused around\nproviding basic services to distributed systems, such as dynamic\nconfiguration, service discovery, locking, leader-election, and so on.")]),e._v(" "),a("p",[e._v("Tendermint is in essence similar software, but with two key differences:")]),e._v(" "),a("ul",[a("li",[e._v("It is Byzantine Fault Tolerant, meaning it can only tolerate up to a\n1/3 of failures, but those failures can include arbitrary behaviour -\nincluding hacking and malicious attacks.")]),e._v(" "),a("li",[e._v("It does not specify a particular application, like a fancy key-value\nstore. Instead, it focuses on arbitrary state machine replication,\nso developers can build the application logic that's right for them,\nfrom key-value store to cryptocurrency to e-voting platform and beyond.")])]),e._v(" "),a("h3",{attrs:{id:"bitcoin-ethereum-etc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitcoin-ethereum-etc"}},[e._v("#")]),e._v(" Bitcoin, Ethereum, etc")]),e._v(" "),a("p",[e._v('Tendermint emerged in the tradition of cryptocurrencies like Bitcoin,\nEthereum, etc. with the goal of providing a more efficient and secure\nconsensus algorithm than Bitcoin\'s Proof of Work. In the early days,\nTendermint had a simple currency built in, and to participate in\nconsensus, users had to "bond" units of the currency into a security\ndeposit which could be revoked if they misbehaved -this is what made\nTendermint a Proof-of-Stake algorithm.')]),e._v(" "),a("p",[e._v("Since then, Tendermint has evolved to be a general purpose blockchain\nconsensus engine that can host arbitrary application states. That means\nit can be used as a plug-and-play replacement for the consensus engines\nof other blockchain software. So one can take the current Ethereum code\nbase, whether in Rust, or Go, or Haskell, and run it as a ABCI\napplication using Tendermint consensus. Indeed, "),a("a",{attrs:{href:"https://github.com/cosmos/ethermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("we did that with\nEthereum"),a("OutboundLink")],1),e._v(". And we plan to do\nthe same for Bitcoin, ZCash, and various other deterministic\napplications as well.")]),e._v(" "),a("p",[e._v("Another example of a cryptocurrency application built on Tendermint is\n"),a("a",{attrs:{href:"http://cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Cosmos network"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"other-blockchain-projects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-blockchain-projects"}},[e._v("#")]),e._v(" Other Blockchain Projects")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/hyperledger/fabric",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fabric"),a("OutboundLink")],1),e._v(' takes a similar approach\nto Tendermint, but is more opinionated about how the state is managed,\nand requires that all application behaviour runs in potentially many\ndocker containers, modules it calls "chaincode". It uses an\nimplementation of '),a("a",{attrs:{href:"http://pmg.csail.mit.edu/papers/osdi99.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("PBFT"),a("OutboundLink")],1),e._v(".\nfrom a team at IBM that is augmented to handle potentially non-deterministic\nchaincode It is possible to implement this docker-based behaviour as a ABCI app\nin Tendermint, though extending Tendermint to handle non-determinism remains\nfor future work.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/hyperledger/burrow",target:"_blank",rel:"noopener noreferrer"}},[e._v("Burrow"),a("OutboundLink")],1),e._v(" is an implementation of\nthe Ethereum Virtual Machine and Ethereum transaction mechanics, with\nadditional features for a name-registry, permissions, and native\ncontracts, and an alternative blockchain API. It uses Tendermint as its\nconsensus engine, and provides a particular application state.")]),e._v(" "),a("h2",{attrs:{id:"abci-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abci-overview"}},[e._v("#")]),e._v(" ABCI Overview")]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application BlockChain Interface\n(ABCI)"),a("OutboundLink")],1),e._v("\nallows for Byzantine Fault Tolerant replication of applications\nwritten in any programming language.")]),e._v(" "),a("h3",{attrs:{id:"motivation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),a("p",[e._v('Thus far, all blockchains "stacks" (such as\n'),a("a",{attrs:{href:"https://github.com/bitcoin/bitcoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitcoin"),a("OutboundLink")],1),e._v(') have had a monolithic\ndesign. That is, each blockchain stack is a single program that handles\nall the concerns of a decentralized ledger; this includes P2P\nconnectivity, the "mempool" broadcasting of transactions, consensus on\nthe most recent block, account balances, Turing-complete contracts,\nuser-level permissions, etc.')]),e._v(" "),a("p",[e._v('Using a monolithic architecture is typically bad practice in computer\nscience. It makes it difficult to reuse components of the code, and\nattempts to do so result in complex maintenance procedures for forks of\nthe codebase. This is especially true when the codebase is not modular\nin design and suffers from "spaghetti code".')]),e._v(" "),a("p",[e._v("Another problem with monolithic design is that it limits you to the\nlanguage of the blockchain stack (or vice versa). In the case of\nEthereum which supports a Turing-complete bytecode virtual-machine, it\nlimits you to languages that compile down to that bytecode; today, those\nare Serpent and Solidity.")]),e._v(" "),a("p",[e._v("In contrast, our approach is to decouple the consensus engine and P2P\nlayers from the details of the application state of the particular\nblockchain application. We do this by abstracting away the details of\nthe application to an interface, which is implemented as a socket\nprotocol.")]),e._v(" "),a("p",[e._v("Thus we have an interface, the Application BlockChain Interface (ABCI),\nand its primary implementation, the Tendermint Socket Protocol (TSP, or\nTeaspoon).")]),e._v(" "),a("h3",{attrs:{id:"intro-to-abci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro-to-abci"}},[e._v("#")]),e._v(" Intro to ABCI")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Core"),a("OutboundLink")],1),e._v(' (the\n"consensus engine") communicates with the application via a socket\nprotocol that satisfies the ABCI.')]),e._v(" "),a("p",[e._v("To draw an analogy, lets talk about a well-known cryptocurrency,\nBitcoin. Bitcoin is a cryptocurrency blockchain where each node\nmaintains a fully audited Unspent Transaction Output (UTXO) database. If\none wanted to create a Bitcoin-like system on top of ABCI, Tendermint\nCore would be responsible for")]),e._v(" "),a("ul",[a("li",[e._v("Sharing blocks and transactions between nodes")]),e._v(" "),a("li",[e._v("Establishing a canonical/immutable order of transactions\n(the blockchain)")])]),e._v(" "),a("p",[e._v("The application will be responsible for")]),e._v(" "),a("ul",[a("li",[e._v("Maintaining the UTXO database")]),e._v(" "),a("li",[e._v("Validating cryptographic signatures of transactions")]),e._v(" "),a("li",[e._v("Preventing transactions from spending non-existent transactions")]),e._v(" "),a("li",[e._v("Allowing clients to query the UTXO database.")])]),e._v(" "),a("p",[e._v("Tendermint is able to decompose the blockchain design by offering a very\nsimple API (ie. the ABCI) between the application process and consensus\nprocess.")]),e._v(" "),a("p",[e._v("The ABCI consists of 3 primary message types that get delivered from the\ncore to the application. The application replies with corresponding\nresponse messages.")]),e._v(" "),a("p",[e._v("The messages are specified here: "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/README.md#message-types",target:"_blank",rel:"noopener noreferrer"}},[e._v("ABCI Message\nTypes"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("DeliverTx")]),e._v(" message is the work horse of the application. Each\ntransaction in the blockchain is delivered with this message. The\napplication needs to validate each transaction received with the\n"),a("strong",[e._v("DeliverTx")]),e._v(" message against the current state, application protocol,\nand the cryptographic credentials of the transaction. A validated\ntransaction then needs to update the application state — by binding a\nvalue into a key values store, or by updating the UTXO database, for\ninstance.")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("CheckTx")]),e._v(" message is similar to "),a("strong",[e._v("DeliverTx")]),e._v(", but it's only for\nvalidating transactions. Tendermint Core's mempool first checks the\nvalidity of a transaction with "),a("strong",[e._v("CheckTx")]),e._v(", and only relays valid\ntransactions to its peers. For instance, an application may check an\nincrementing sequence number in the transaction and return an error upon\n"),a("strong",[e._v("CheckTx")]),e._v(" if the sequence number is old. Alternatively, they might use\na capabilities based system that requires capabilities to be renewed\nwith every transaction.")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Commit")]),e._v(" message is used to compute a cryptographic commitment to\nthe current application state, to be placed into the next block header.\nThis has some handy properties. Inconsistencies in updating that state\nwill now appear as blockchain forks which catches a whole class of\nprogramming errors. This also simplifies the development of secure\nlightweight clients, as Merkle-hash proofs can be verified by checking\nagainst the block hash, and that the block hash is signed by a quorum.")]),e._v(" "),a("p",[e._v("There can be multiple ABCI socket connections to an application.\nTendermint Core creates three ABCI connections to the application; one\nfor the validation of transactions when broadcasting in the mempool, one\nfor the consensus engine to run block proposals, and one more for\nquerying the application state.")]),e._v(" "),a("p",[e._v("It's probably evident that applications designers need to very carefully\ndesign their message handlers to create a blockchain that does anything\nuseful but this architecture provides a place to start. The diagram\nbelow illustrates the flow of messages via ABCI.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(570),alt:"abci"}})]),e._v(" "),a("h2",{attrs:{id:"a-note-on-determinism"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-determinism"}},[e._v("#")]),e._v(" A Note on Determinism")]),e._v(" "),a("p",[e._v("The logic for blockchain transaction processing must be deterministic.\nIf the application logic weren't deterministic, consensus would not be\nreached among the Tendermint Core replica nodes.")]),e._v(" "),a("p",[e._v("Solidity on Ethereum is a great language of choice for blockchain\napplications because, among other reasons, it is a completely\ndeterministic programming language. However, it's also possible to\ncreate deterministic applications using existing popular languages like\nJava, C++, Python, or Go. Game programmers and blockchain developers are\nalready familiar with creating deterministic programs by avoiding\nsources of non-determinism such as:")]),e._v(" "),a("ul",[a("li",[e._v("random number generators (without deterministic seeding)")]),e._v(" "),a("li",[e._v("race conditions on threads (or avoiding threads altogether)")]),e._v(" "),a("li",[e._v("the system clock")]),e._v(" "),a("li",[e._v("uninitialized memory (in unsafe programming languages like C\nor C++)")]),e._v(" "),a("li",[a("a",{attrs:{href:"http://gafferongames.com/networking-for-game-programmers/floating-point-determinism/",target:"_blank",rel:"noopener noreferrer"}},[e._v("floating point\narithmetic"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("language features that are random (e.g. map iteration in Go)")])]),e._v(" "),a("p",[e._v("While programmers can avoid non-determinism by being careful, it is also\npossible to create a special linter or static analyzer for each language\nto check for determinism. In the future we may work with partners to\ncreate such tools.")]),e._v(" "),a("h2",{attrs:{id:"consensus-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consensus-overview"}},[e._v("#")]),e._v(" Consensus Overview")]),e._v(" "),a("p",[e._v("Tendermint is an easy-to-understand, mostly asynchronous, BFT consensus\nprotocol. The protocol follows a simple state machine that looks like\nthis:")]),e._v(" "),a("p",[a("img",{attrs:{src:n(571),alt:"consensus-logic"}})]),e._v(" "),a("p",[e._v("Participants in the protocol are called "),a("strong",[e._v("validators")]),e._v("; they take turns\nproposing blocks of transactions and voting on them. Blocks are\ncommitted in a chain, with one block at each "),a("strong",[e._v("height")]),e._v(". A block may\nfail to be committed, in which case the protocol moves to the next\n"),a("strong",[e._v("round")]),e._v(", and a new validator gets to propose a block for that height.\nTwo stages of voting are required to successfully commit a block; we\ncall them "),a("strong",[e._v("pre-vote")]),e._v(" and "),a("strong",[e._v("pre-commit")]),e._v(". A block is committed when\nmore than 2/3 of validators pre-commit for the same block in the same\nround.")]),e._v(" "),a("p",[e._v("There is a picture of a couple doing the polka because validators are\ndoing something like a polka dance. When more than two-thirds of the\nvalidators pre-vote for the same block, we call that a "),a("strong",[e._v("polka")]),e._v(". Every\npre-commit must be justified by a polka in the same round.")]),e._v(" "),a("p",[e._v("Validators may fail to commit a block for a number of reasons; the\ncurrent proposer may be offline, or the network may be slow. Tendermint\nallows them to establish that a validator should be skipped. Validators\nwait a small amount of time to receive a complete proposal block from\nthe proposer before voting to move to the next round. This reliance on a\ntimeout is what makes Tendermint a weakly synchronous protocol, rather\nthan an asynchronous one. However, the rest of the protocol is\nasynchronous, and validators only make progress after hearing from more\nthan two-thirds of the validator set. A simplifying element of\nTendermint is that it uses the same mechanism to commit a block as it\ndoes to skip to the next round.")]),e._v(" "),a("p",[e._v("Assuming less than one-third of the validators are Byzantine, Tendermint\nguarantees that safety will never be violated - that is, validators will\nnever commit conflicting blocks at the same height. To do this it\nintroduces a few "),a("strong",[e._v("locking")]),e._v(" rules which modulate which paths can be\nfollowed in the flow diagram. Once a validator precommits a block, it is\nlocked on that block. Then,")]),e._v(" "),a("ol",[a("li",[e._v("it must prevote for the block it is locked on")]),e._v(" "),a("li",[e._v("it can only unlock, and precommit for a new block, if there is a\npolka for that block in a later round")])]),e._v(" "),a("h2",{attrs:{id:"stake"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stake"}},[e._v("#")]),e._v(" Stake")]),e._v(" "),a("p",[e._v('In many systems, not all validators will have the same "weight" in the\nconsensus protocol. Thus, we are not so much interested in one-third or\ntwo-thirds of the validators, but in those proportions of the total\nvoting power, which may not be uniformly distributed across individual\nvalidators.')]),e._v(" "),a("p",[e._v('Since Tendermint can replicate arbitrary applications, it is possible to\ndefine a currency, and denominate the voting power in that currency.\nWhen voting power is denominated in a native currency, the system is\noften referred to as Proof-of-Stake. Validators can be forced, by logic\nin the application, to "bond" their currency holdings in a security\ndeposit that can be destroyed if they\'re found to misbehave in the\nconsensus protocol. This adds an economic element to the security of the\nprotocol, allowing one to quantify the cost of violating the assumption\nthat less than one-third of voting power is Byzantine.')]),e._v(" "),a("p",[e._v("The "),a("a",{attrs:{href:"https://cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos Network"),a("OutboundLink")],1),e._v(" is designed to use this\nProof-of-Stake mechanism across an array of cryptocurrencies implemented\nas ABCI applications.")]),e._v(" "),a("p",[e._v("The following diagram is Tendermint in a (technical) nutshell.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(572),alt:"tx-flow"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);