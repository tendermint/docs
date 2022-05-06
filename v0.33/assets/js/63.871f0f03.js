(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{636:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"application-development-guide"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-development-guide"}},[e._v("#")]),e._v(" Application Development Guide")]),e._v(" "),n("h2",{attrs:{id:"xxx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xxx"}},[e._v("#")]),e._v(" XXX")]),e._v(" "),n("p",[e._v("This page is undergoing deprecation. All content is being moved to the new "),n("a",{attrs:{href:"https://github.com/tendermint/spec/tree/master/spec/abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("home\nof the ABCI specification"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"abci-design"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#abci-design"}},[e._v("#")]),e._v(" ABCI Design")]),e._v(" "),n("p",[e._v("The purpose of ABCI is to provide a clean interface between state\ntransition machines on one computer and the mechanics of their\nreplication across multiple computers. The former we call 'application\nlogic' and the latter the 'consensus engine'. Application logic\nvalidates transactions and optionally executes transactions against some\npersistent state. A consensus engine ensures all transactions are\nreplicated in the same order on every machine. We call each machine in a\nconsensus engine a 'validator', and each validator runs the same\ntransactions through the same application logic. In particular, we are\ninterested in blockchain-style consensus engines, where transactions are\ncommitted in hash-linked blocks.")]),e._v(" "),n("p",[e._v("The ABCI design has a few distinct components:")]),e._v(" "),n("ul",[n("li",[e._v("message protocol\n"),n("ul",[n("li",[e._v("pairs of request and response messages")]),e._v(" "),n("li",[e._v("consensus makes requests, application responds")]),e._v(" "),n("li",[e._v("defined using protobuf")])])]),e._v(" "),n("li",[e._v("server/client\n"),n("ul",[n("li",[e._v("consensus engine runs the client")]),e._v(" "),n("li",[e._v("application runs the server")]),e._v(" "),n("li",[e._v("two implementations:\n"),n("ul",[n("li",[e._v("async raw bytes")]),e._v(" "),n("li",[e._v("grpc")])])])])]),e._v(" "),n("li",[e._v("blockchain protocol\n"),n("ul",[n("li",[e._v("abci is connection oriented")]),e._v(" "),n("li",[e._v("Tendermint Core maintains three connections:\n"),n("ul",[n("li",[n("a",{attrs:{href:"#mempool-connection"}},[e._v("mempool connection")]),e._v(": for checking if\ntransactions should be relayed before they are committed;\nonly uses "),n("code",[e._v("CheckTx")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#consensus-connection"}},[e._v("consensus connection")]),e._v(": for executing\ntransactions that have been committed. Message sequence is\n-for every block -"),n("code",[e._v("BeginBlock, [DeliverTx, ...], EndBlock, Commit")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#query-connection"}},[e._v("query connection")]),e._v(": for querying the\napplication state; only uses Query and Info")])])])])])]),e._v(" "),n("p",[e._v("The mempool and consensus logic act as clients, and each maintains an\nopen ABCI connection with the application, which hosts an ABCI server.\nShown are the request and response types sent on each connection.")]),e._v(" "),n("p",[e._v("Most of the examples below are from "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/example/kvstore/kvstore.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("kvstore\napplication"),n("OutboundLink")],1),e._v(",\nwhich is a part of the abci repo. "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/example/kvstore/persistent_kvstore.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("persistent_kvstore\napplication"),n("OutboundLink")],1),e._v("\nis used to show "),n("code",[e._v("BeginBlock")]),e._v(", "),n("code",[e._v("EndBlock")]),e._v(" and "),n("code",[e._v("InitChain")]),e._v(" example\nimplementations.")]),e._v(" "),n("h2",{attrs:{id:"blockchain-protocol"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-protocol"}},[e._v("#")]),e._v(" Blockchain Protocol")]),e._v(" "),n("p",[e._v("In ABCI, a transaction is simply an arbitrary length byte-array. It is\nthe application's responsibility to define the transaction codec as they\nplease, and to use it for both CheckTx and DeliverTx.")]),e._v(" "),n("p",[e._v("Note that there are two distinct means for running transactions,\ncorresponding to stages of 'awareness' of the transaction in the\nnetwork. The first stage is when a transaction is received by a\nvalidator from a client into the so-called mempool or transaction pool\n-this is where we use CheckTx. The second is when the transaction is\nsuccessfully committed on more than 2/3 of validators - where we use\nDeliverTx. In the former case, it may not be necessary to run all the\nstate transitions associated with the transaction, as the transaction\nmay not ultimately be committed until some much later time, when the\nresult of its execution will be different. For instance, an Ethereum\nABCI app would check signatures and amounts in CheckTx, but would not\nactually execute any contract code until the DeliverTx, so as to avoid\nexecuting state transitions that have not been finalized.")]),e._v(" "),n("p",[e._v("To formalize the distinction further, two explicit ABCI connections are\nmade between Tendermint Core and the application: the mempool connection\nand the consensus connection. We also make a third connection, the query\nconnection, to query the local state of the app.")]),e._v(" "),n("h3",{attrs:{id:"mempool-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mempool-connection"}},[e._v("#")]),e._v(" Mempool Connection")]),e._v(" "),n("p",[e._v("The mempool connection is used "),n("em",[e._v("only")]),e._v(" for CheckTx requests. Transactions\nare run using CheckTx in the same order they were received by the\nvalidator. If the CheckTx returns "),n("code",[e._v("OK")]),e._v(", the transaction is kept in\nmemory and relayed to other peers in the same order it was received.\nOtherwise, it is discarded.")]),e._v(" "),n("p",[e._v("CheckTx requests run concurrently with block processing; so they should\nrun against a copy of the main application state which is reset after\nevery block. This copy is necessary to track transitions made by a\nsequence of CheckTx requests before they are included in a block. When a\nblock is committed, the application must ensure to reset the mempool\nstate to the latest committed state. Tendermint Core will then filter\nthrough all transactions in the mempool, removing any that were included\nin the block, and re-run the rest using CheckTx against the post-Commit\nmempool state (this behaviour can be turned off with\n"),n("code",[e._v("[mempool] recheck = false")]),e._v(").")]),e._v(" "),n("p",[e._v("In go:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENoZWNrVHgocmVxIHR5cGVzLlJlcXVlc3RDaGVja1R4KSB0eXBlcy5SZXNwb25zZUNoZWNrVHggewoJcmV0dXJuIHR5cGVzLlJlc3BvbnNlQ2hlY2tUeHtDb2RlOiBjb2RlLkNvZGVUeXBlT0ssIEdhc1dhbnRlZDogMX0KfQo="}}),e._v(" "),n("p",[e._v("In Java:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"UmVzcG9uc2VDaGVja1R4IHJlcXVlc3RDaGVja1R4KFJlcXVlc3RDaGVja1R4IHJlcSkgewogICAgYnl0ZVtdIHRyYW5zYWN0aW9uID0gcmVxLmdldFR4KCkudG9CeXRlQXJyYXkoKTsKCiAgICAvLyB2YWxpZGF0ZSB0cmFuc2FjdGlvbgoKICAgIGlmIChub3RWYWxpZCkgewogICAgICAgIHJldHVybiBSZXNwb25zZUNoZWNrVHgubmV3QnVpbGRlcigpLnNldENvZGUoQ29kZVR5cGUuQmFkTm9uY2UpLnNldExvZygmcXVvdDtpbnZhbGlkIHR4JnF1b3Q7KS5idWlsZCgpOwogICAgfSBlbHNlIHsKICAgICAgICByZXR1cm4gUmVzcG9uc2VDaGVja1R4Lm5ld0J1aWxkZXIoKS5zZXRDb2RlKENvZGVUeXBlLk9LKS5idWlsZCgpOwogICAgfQp9Cg=="}}),e._v(" "),n("h3",{attrs:{id:"replay-protection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#replay-protection"}},[e._v("#")]),e._v(" Replay Protection")]),e._v(" "),n("p",[e._v("To prevent old transactions from being replayed, CheckTx must implement\nreplay protection.")]),e._v(" "),n("p",[e._v("Tendermint provides the first defence layer by keeping a lightweight\nin-memory cache of 100k ("),n("code",[e._v("[mempool] cache_size")]),e._v(") last transactions in\nthe mempool. If Tendermint is just started or the clients sent more than\n100k transactions, old transactions may be sent to the application. So\nit is important CheckTx implements some logic to handle them.")]),e._v(" "),n("p",[e._v("If there are cases in your application where a transaction may become invalid in some\nfuture state, you probably want to disable Tendermint's\ncache. You can do that by setting "),n("code",[e._v("[mempool] cache_size = 0")]),e._v(" in the\nconfig.")]),e._v(" "),n("h3",{attrs:{id:"consensus-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consensus-connection"}},[e._v("#")]),e._v(" Consensus Connection")]),e._v(" "),n("p",[e._v("The consensus connection is used only when a new block is committed, and\ncommunicates all information from the block in a series of requests:\n"),n("code",[e._v("BeginBlock, [DeliverTx, ...], EndBlock, Commit")]),e._v(". That is, when a block\nis committed in the consensus, we send a list of DeliverTx requests (one\nfor each transaction) sandwiched by BeginBlock and EndBlock requests,\nand followed by a Commit.")]),e._v(" "),n("h3",{attrs:{id:"delivertx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delivertx"}},[e._v("#")]),e._v(" DeliverTx")]),e._v(" "),n("p",[e._v("DeliverTx is the workhorse of the blockchain. Tendermint sends the\nDeliverTx requests asynchronously but in order, and relies on the\nunderlying socket protocol (ie. TCP) to ensure they are received by the\napp in order. They have already been ordered in the global consensus by\nthe Tendermint protocol.")]),e._v(" "),n("p",[e._v("DeliverTx returns a abci.Result, which includes a Code, Data, and Log.\nThe code may be non-zero (non-OK), meaning the corresponding transaction\nshould have been rejected by the mempool, but may have been included in\na block by a Byzantine proposer.")]),e._v(" "),n("p",[e._v("The block header will be updated (TODO) to include some commitment to\nthe results of DeliverTx, be it a bitarray of non-OK transactions, or a\nmerkle root of the data returned by the DeliverTx requests, or both.")]),e._v(" "),n("p",[e._v("In go:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ly8gdHggaXMgZWl0aGVyICZxdW90O2tleT12YWx1ZSZxdW90OyBvciBqdXN0IGFyYml0cmFyeSBieXRlcwpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgRGVsaXZlclR4KHJlcSB0eXBlcy5SZXF1ZXN0RGVsaXZlclR4KSB0eXBlcy5SZXNwb25zZURlbGl2ZXJUeCB7Cgl2YXIga2V5LCB2YWx1ZSBbXWJ5dGUKCXBhcnRzIDo9IGJ5dGVzLlNwbGl0KHJlcS5UeCwgW11ieXRlKCZxdW90Oz0mcXVvdDspKQoJaWYgbGVuKHBhcnRzKSA9PSAyIHsKCQlrZXksIHZhbHVlID0gcGFydHNbMF0sIHBhcnRzWzFdCgl9IGVsc2UgewoJCWtleSwgdmFsdWUgPSByZXEuVHgsIHJlcS5UeAoJfQoKCWFwcC5zdGF0ZS5kYi5TZXQocHJlZml4S2V5KGtleSksIHZhbHVlKQoJYXBwLnN0YXRlLlNpemUgKz0gMQoKCWV2ZW50cyA6PSBbXXR5cGVzLkV2ZW50ewoJCXsKCQkJVHlwZTogJnF1b3Q7YXBwJnF1b3Q7LAoJCQlBdHRyaWJ1dGVzOiBbXWt2LlBhaXJ7CgkJCQl7S2V5OiBbXWJ5dGUoJnF1b3Q7Y3JlYXRvciZxdW90OyksIFZhbHVlOiBbXWJ5dGUoJnF1b3Q7Q29zbW9zaGkgTmV0b3dva28mcXVvdDspfSwKCQkJCXtLZXk6IFtdYnl0ZSgmcXVvdDtrZXkmcXVvdDspLCBWYWx1ZToga2V5fSwKCQkJfSwKCQl9LAoJfQoKCXJldHVybiB0eXBlcy5SZXNwb25zZURlbGl2ZXJUeHtDb2RlOiBjb2RlLkNvZGVUeXBlT0ssIEV2ZW50czogZXZlbnRzfQp9Cg=="}}),e._v(" "),n("p",[e._v("In Java:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LyoqCiAqIFVzaW5nIFByb3RvYnVmIHR5cGVzIGZyb20gdGhlIHByb3RvYyBjb21waWxlciwgd2UgYWx3YXlzIHN0YXJ0IHdpdGggYSBieXRlW10KICovClJlc3BvbnNlRGVsaXZlclR4IGRlbGl2ZXJUeChSZXF1ZXN0RGVsaXZlclR4IHJlcXVlc3QpIHsKICAgIGJ5dGVbXSB0cmFuc2FjdGlvbiAgPSByZXF1ZXN0LmdldFR4KCkudG9CeXRlQXJyYXkoKTsKCiAgICAvLyB2YWxpZGF0ZSB5b3VyIHRyYW5zYWN0aW9uCgogICAgaWYgKG5vdFZhbGlkKSB7CiAgICAgICAgcmV0dXJuIFJlc3BvbnNlRGVsaXZlclR4Lm5ld0J1aWxkZXIoKS5zZXRDb2RlKENvZGVUeXBlLkJhZE5vbmNlKS5zZXRMb2coJnF1b3Q7dHJhbnNhY3Rpb24gd2FzIGludmFsaWQmcXVvdDspLmJ1aWxkKCk7CiAgICB9IGVsc2UgewogICAgICAgIFJlc3BvbnNlRGVsaXZlclR4Lm5ld0J1aWxkZXIoKS5zZXRDb2RlKENvZGVUeXBlLk9LKS5idWlsZCgpOwogICAgfQoKfQo="}}),e._v(" "),n("h3",{attrs:{id:"commit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[e._v("#")]),e._v(" Commit")]),e._v(" "),n("p",[e._v("Once all processing of the block is complete, Tendermint sends the\nCommit request and blocks waiting for a response. While the mempool may\nrun concurrently with block processing (the BeginBlock, DeliverTxs, and\nEndBlock), it is locked for the Commit request so that its state can be\nsafely updated during Commit. This means the app "),n("em",[e._v("MUST NOT")]),e._v(" do any\nblocking communication with the mempool (ie. broadcast_tx) during\nCommit, or there will be deadlock. Note also that all remaining\ntransactions in the mempool are replayed on the mempool connection\n(CheckTx) following a commit.")]),e._v(" "),n("p",[e._v("The app should respond to the Commit request with a byte array, which is\nthe deterministic state root of the application. It is included in the\nheader of the next block. It can be used to provide easily verified\nMerkle-proofs of the state of the application.")]),e._v(" "),n("p",[e._v("It is expected that the app will persist state to disk on Commit. The\noption to have all transactions replayed from some previous block is the\njob of the "),n("a",{attrs:{href:"#handshake"}},[e._v("Handshake")]),e._v(".")]),e._v(" "),n("p",[e._v("In go:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENvbW1pdCgpIHR5cGVzLlJlc3BvbnNlQ29tbWl0IHsKCS8vIFVzaW5nIGEgbWVtZGIgLSBqdXN0IHJldHVybiB0aGUgYmlnIGVuZGlhbiBzaXplIG9mIHRoZSBkYgoJYXBwSGFzaCA6PSBtYWtlKFtdYnl0ZSwgOCkKCWJpbmFyeS5QdXRWYXJpbnQoYXBwSGFzaCwgYXBwLnN0YXRlLlNpemUpCglhcHAuc3RhdGUuQXBwSGFzaCA9IGFwcEhhc2gKCWFwcC5zdGF0ZS5IZWlnaHQgKz0gMQoJc2F2ZVN0YXRlKGFwcC5zdGF0ZSkKCXJldHVybiB0eXBlcy5SZXNwb25zZUNvbW1pdHtEYXRhOiBhcHBIYXNofQp9Cg=="}}),e._v(" "),n("p",[e._v("In Java:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"UmVzcG9uc2VDb21taXQgcmVxdWVzdENvbW1pdChSZXF1ZXN0Q29tbWl0IHJlcXVlc3RDb21taXQpIHsKCiAgICAvLyB1cGRhdGUgdGhlIGludGVybmFsIGFwcC1zdGF0ZQogICAgYnl0ZVtdIG5ld0FwcFN0YXRlID0gY2FsY3VsYXRlQXBwU3RhdGUoKTsKCiAgICAvLyBhbmQgcmV0dXJuIGl0IHRvIHRoZSBub2RlCiAgICByZXR1cm4gUmVzcG9uc2VDb21taXQubmV3QnVpbGRlcigpLnNldENvZGUoQ29kZVR5cGUuT0spLnNldERhdGEoQnl0ZVN0cmluZy5jb3B5RnJvbShuZXdBcHBTdGF0ZSkpLmJ1aWxkKCk7Cn0K"}}),e._v(" "),n("h3",{attrs:{id:"beginblock"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#beginblock"}},[e._v("#")]),e._v(" BeginBlock")]),e._v(" "),n("p",[e._v("The BeginBlock request can be used to run some code at the beginning of\nevery block. It also allows Tendermint to send the current block hash\nand header to the application, before it sends any of the transactions.")]),e._v(" "),n("p",[e._v("The app should remember the latest height and header (ie. from which it\nhas run a successful Commit) so that it can tell Tendermint where to\npick up from when it restarts. See information on the Handshake, below.")]),e._v(" "),n("p",[e._v("In go:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ly8gVHJhY2sgdGhlIGJsb2NrIGhhc2ggYW5kIGhlYWRlciBpbmZvcm1hdGlvbgpmdW5jIChhcHAgKlBlcnNpc3RlbnRLVlN0b3JlQXBwbGljYXRpb24pIEJlZ2luQmxvY2socmVxIHR5cGVzLlJlcXVlc3RCZWdpbkJsb2NrKSB0eXBlcy5SZXNwb25zZUJlZ2luQmxvY2sgewoJLy8gcmVzZXQgdmFsc2V0IGNoYW5nZXMKCWFwcC5WYWxVcGRhdGVzID0gbWFrZShbXXR5cGVzLlZhbGlkYXRvclVwZGF0ZSwgMCkKCXJldHVybiB0eXBlcy5SZXNwb25zZUJlZ2luQmxvY2t7fQp9Cg=="}}),e._v(" "),n("p",[e._v("In Java:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LyoKICogYWxsIHR5cGVzIGNvbWUgZnJvbSBwcm90b2J1ZiBkZWZpbml0aW9uCiAqLwpSZXNwb25zZUJlZ2luQmxvY2sgcmVxdWVzdEJlZ2luQmxvY2soUmVxdWVzdEJlZ2luQmxvY2sgcmVxKSB7CgogICAgSGVhZGVyIGhlYWRlciA9IHJlcS5nZXRIZWFkZXIoKTsKICAgIGJ5dGVbXSBwcmV2QXBwSGFzaCA9IGhlYWRlci5nZXRBcHBIYXNoKCkudG9CeXRlQXJyYXkoKTsKICAgIGxvbmcgcHJldkhlaWdodCA9IGhlYWRlci5nZXRIZWlnaHQoKTsKCiAgICAvLyBydW4geW91ciBwcmUtYmxvY2sgbG9naWMuIE1heWJlIHByZXBhcmUgYSBzdGF0ZSBzbmFwc2hvdCwgbWVzc2FnZSBjb21wb25lbnRzLCBldGMKCiAgICByZXR1cm4gUmVzcG9uc2VCZWdpbkJsb2NrLm5ld0J1aWxkZXIoKS5idWlsZCgpOwp9Cg=="}}),e._v(" "),n("h3",{attrs:{id:"endblock"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#endblock"}},[e._v("#")]),e._v(" EndBlock")]),e._v(" "),n("p",[e._v("The EndBlock request can be used to run some code at the end of every block.\nAdditionally, the response may contain a list of validators, which can be used\nto update the validator set. To add a new validator or update an existing one,\nsimply include them in the list returned in the EndBlock response. To remove\none, include it in the list with a "),n("code",[e._v("power")]),e._v(" equal to "),n("code",[e._v("0")]),e._v(". Validator's "),n("code",[e._v("address")]),e._v("\nfield can be left empty. Tendermint core will take care of updating the\nvalidator set. Note the change in voting power must be strictly less than 1/3\nper block if you want a light client to be able to prove the transition\nexternally. See the "),n("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/lite#hdr-How_We_Track_Validators",target:"_blank",rel:"noopener noreferrer"}},[e._v("light client\ndocs"),n("OutboundLink")],1),e._v("\nfor details on how it tracks validators.")]),e._v(" "),n("p",[e._v("In go:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ly8gVXBkYXRlIHRoZSB2YWxpZGF0b3Igc2V0CmZ1bmMgKGFwcCAqUGVyc2lzdGVudEtWU3RvcmVBcHBsaWNhdGlvbikgRW5kQmxvY2socmVxIHR5cGVzLlJlcXVlc3RFbmRCbG9jaykgdHlwZXMuUmVzcG9uc2VFbmRCbG9jayB7CglyZXR1cm4gdHlwZXMuUmVzcG9uc2VFbmRCbG9ja3tWYWxpZGF0b3JVcGRhdGVzOiBhcHAuVmFsVXBkYXRlc30KfQo="}}),e._v(" "),n("p",[e._v("In Java:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LyoKICogQXNzdW1lIHRoYXQgb25lIHZhbGlkYXRvciBjaGFuZ2VzLiBUaGUgbmV3IHZhbGlkYXRvciBoYXMgYSBwb3dlciBvZiAxMAogKi8KUmVzcG9uc2VFbmRCbG9jayByZXF1ZXN0RW5kQmxvY2soUmVxdWVzdEVuZEJsb2NrIHJlcSkgewogICAgZmluYWwgbG9uZyBjdXJyZW50SGVpZ2h0ID0gcmVxLmdldEhlaWdodCgpOwogICAgZmluYWwgYnl0ZVtdIHZhbGlkYXRvclB1YktleSA9IGdldFZhbFB1YktleSgpOwoKICAgIFJlc3BvbnNlRW5kQmxvY2suQnVpbGRlciBidWlsZGVyID0gUmVzcG9uc2VFbmRCbG9jay5uZXdCdWlsZGVyKCk7CiAgICBidWlsZGVyLmFkZERpZmZzKDEsIFR5cGVzLlZhbGlkYXRvci5uZXdCdWlsZGVyKCkuc2V0UG93ZXIoMTBMKS5zZXRQdWJLZXkoQnl0ZVN0cmluZy5jb3B5RnJvbSh2YWxpZGF0b3JQdWJLZXkpKS5idWlsZCgpKTsKCiAgICByZXR1cm4gYnVpbGRlci5idWlsZCgpOwp9Cg=="}}),e._v(" "),n("h3",{attrs:{id:"query-connection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query-connection"}},[e._v("#")]),e._v(" Query Connection")]),e._v(" "),n("p",[e._v('This connection is used to query the application without engaging\nconsensus. It\'s exposed over the tendermint core rpc, so clients can\nquery the app without exposing a server on the app itself, but they must\nserialize each query as a single byte array. Additionally, certain\n"standardized" queries may be used to inform local decisions, for\ninstance about which peers to connect to.')]),e._v(" "),n("p",[e._v("Tendermint Core currently uses the Query connection to filter peers upon\nconnecting, according to IP address or node ID. For instance,\nreturning non-OK ABCI response to either of the following queries will\ncause Tendermint to not connect to the corresponding peer:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("p2p/filter/addr/<ip addr>")]),e._v(", where "),n("code",[e._v("<ip addr>")]),e._v(" is an IP address.")]),e._v(" "),n("li",[n("code",[e._v("p2p/filter/id/<id>")]),e._v(", where "),n("code",[e._v("<is>")]),e._v(" is the hex-encoded node ID (the hash of\nthe node's p2p pubkey).")])]),e._v(" "),n("p",[e._v("Note: these query formats are subject to change!")]),e._v(" "),n("p",[e._v("In go:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIFF1ZXJ5KHJlcVF1ZXJ5IHR5cGVzLlJlcXVlc3RRdWVyeSkgKHJlc1F1ZXJ5IHR5cGVzLlJlc3BvbnNlUXVlcnkpIHsKCWlmIHJlcVF1ZXJ5LlByb3ZlIHsKCQl2YWx1ZSA6PSBhcHAuc3RhdGUuZGIuR2V0KHByZWZpeEtleShyZXFRdWVyeS5EYXRhKSkKCQlyZXNRdWVyeS5JbmRleCA9IC0xIC8vIFRPRE8gbWFrZSBQcm9vZiByZXR1cm4gaW5kZXgKCQlyZXNRdWVyeS5LZXkgPSByZXFRdWVyeS5EYXRhCgkJcmVzUXVlcnkuVmFsdWUgPSB2YWx1ZQoJCWlmIHZhbHVlICE9IG5pbCB7CgkJCXJlc1F1ZXJ5LkxvZyA9ICZxdW90O2V4aXN0cyZxdW90OwoJCX0gZWxzZSB7CgkJCXJlc1F1ZXJ5LkxvZyA9ICZxdW90O2RvZXMgbm90IGV4aXN0JnF1b3Q7CgkJfQoJCXJldHVybgoJfSBlbHNlIHsKCQlyZXNRdWVyeS5LZXkgPSByZXFRdWVyeS5EYXRhCgkJdmFsdWUgOj0gYXBwLnN0YXRlLmRiLkdldChwcmVmaXhLZXkocmVxUXVlcnkuRGF0YSkpCgkJcmVzUXVlcnkuVmFsdWUgPSB2YWx1ZQoJCWlmIHZhbHVlICE9IG5pbCB7CgkJCXJlc1F1ZXJ5LkxvZyA9ICZxdW90O2V4aXN0cyZxdW90OwoJCX0gZWxzZSB7CgkJCXJlc1F1ZXJ5LkxvZyA9ICZxdW90O2RvZXMgbm90IGV4aXN0JnF1b3Q7CgkJfQoJCXJldHVybgoJfQp9Cg=="}}),e._v(" "),n("p",[e._v("In Java:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgIFJlc3BvbnNlUXVlcnkgcmVxdWVzdFF1ZXJ5KFJlcXVlc3RRdWVyeSByZXEpIHsKICAgICAgICBmaW5hbCBib29sZWFuIGlzUHJvdmVRdWVyeSA9IHJlcS5nZXRQcm92ZSgpOwogICAgICAgIGZpbmFsIFJlc3BvbnNlUXVlcnkuQnVpbGRlciByZXNwb25zZUJ1aWxkZXIgPSBSZXNwb25zZVF1ZXJ5Lm5ld0J1aWxkZXIoKTsKCQlieXRlW10gcXVlcnlEYXRhID0gcmVxLmdldERhdGEoKS50b0J5dGVBcnJheSgpOwoKICAgICAgICBpZiAoaXNQcm92ZVF1ZXJ5KSB7CiAgICAgICAgICAgIGNvbS5hcHAuZXhhbXBsZS5RdWVyeVJlc3VsdFdpdGhQcm9vZiByZXN1bHQgPSBnZW5lcmF0ZVF1ZXJ5UmVzdWx0V2l0aFByb29mKHF1ZXJ5RGF0YSk7CiAgICAgICAgICAgIHJlc3BvbnNlQnVpbGRlci5zZXRJbmRleChyZXN1bHQuZ2V0TGVmdEluZGV4KCkpOwogICAgICAgICAgICByZXNwb25zZUJ1aWxkZXIuc2V0S2V5KHJlcS5nZXREYXRhKCkpOwogICAgICAgICAgICByZXNwb25zZUJ1aWxkZXIuc2V0VmFsdWUocmVzdWx0LmdldFZhbHVlT3JOdWxsKDApKTsKICAgICAgICAgICAgcmVzcG9uc2VCdWlsZGVyLnNldEhlaWdodChyZXN1bHQuZ2V0SGVpZ2h0KCkpOwogICAgICAgICAgICByZXNwb25zZUJ1aWxkZXIuc2V0UHJvb2YocmVzdWx0LmdldFByb29mKCkpOwogICAgICAgICAgICByZXNwb25zZUJ1aWxkZXIuc2V0TG9nKHJlc3VsdC5nZXRMb2dWYWx1ZSgpKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBjb20uYXBwLmV4YW1wbGUuUXVlcnlSZXN1bHQgcmVzdWx0ID0gZ2VuZXJhdGVRdWVyeVJlc3VsdChxdWVyeURhdGEpOwogICAgICAgICAgICByZXNwb25zZUJ1aWxkZXIuc2V0SW5kZXgocmVzdWx0LmdldEluZGV4KCkpOwogICAgICAgICAgICByZXNwb25zZUJ1aWxkZXIuc2V0VmFsdWUocmVzdWx0LmdldFZhbHVlKCkpOwogICAgICAgICAgICByZXNwb25zZUJ1aWxkZXIuc2V0TG9nKHJlc3VsdC5nZXRMb2dWYWx1ZSgpKTsKICAgICAgICB9CgogICAgICAgIHJlc3BvbnNlQnVpbGRlci5zZXRJbmRleChyZXN1bHQuZ2V0SW5kZXgoKSk7CiAgICAgICAgcmVzcG9uc2VCdWlsZGVyLnNldFZhbHVlKEJ5dGVTdHJpbmcuY29weUZyb20ocmVzdWx0LmdldFZhbHVlKCkpKTsKICAgICAgICByZXNwb25zZUJ1aWxkZXIuc2V0TG9nKHJlc3VsdC5nZXRMb2dWYWx1ZSgpKTsKICAgIH0KCiAgICByZXR1cm4gcmVzcG9uc2VCdWlsZGVyLmJ1aWxkKCk7Cn0K"}}),e._v(" "),n("h3",{attrs:{id:"handshake"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#handshake"}},[e._v("#")]),e._v(" Handshake")]),e._v(" "),n("p",[e._v("When the app or tendermint restarts, they need to sync to a common\nheight. When an ABCI connection is first established, Tendermint will\ncall "),n("code",[e._v("Info")]),e._v(" on the Query connection. The response should contain the\nLastBlockHeight and LastBlockAppHash - the former is the last block for\nwhich the app ran Commit successfully, the latter is the response from\nthat Commit.")]),e._v(" "),n("p",[e._v("Using this information, Tendermint will determine what needs to be\nreplayed, if anything, against the app, to ensure both Tendermint and\nthe app are synced to the latest block height.")]),e._v(" "),n("p",[e._v("If the app returns a LastBlockHeight of 0, Tendermint will just replay\nall blocks.")]),e._v(" "),n("p",[e._v("In go:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEluZm8ocmVxIHR5cGVzLlJlcXVlc3RJbmZvKSAocmVzSW5mbyB0eXBlcy5SZXNwb25zZUluZm8pIHsKCXJldHVybiB0eXBlcy5SZXNwb25zZUluZm97CgkJRGF0YTogICAgICAgZm10LlNwcmludGYoJnF1b3Q7e1wmcXVvdDtzaXplXCZxdW90Ozoldn0mcXVvdDssIGFwcC5zdGF0ZS5TaXplKSwKCQlWZXJzaW9uOiAgICB2ZXJzaW9uLkFCQ0lWZXJzaW9uLAoJCUFwcFZlcnNpb246IFByb3RvY29sVmVyc2lvbi5VaW50NjQoKSwKCX0KfQo="}}),e._v(" "),n("p",[e._v("In Java:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"UmVzcG9uc2VJbmZvIHJlcXVlc3RJbmZvKFJlcXVlc3RJbmZvIHJlcSkgewogICAgZmluYWwgYnl0ZVtdIGxhc3RBcHBIYXNoID0gZ2V0TGFzdEFwcEhhc2goKTsKICAgIGZpbmFsIGxvbmcgbGFzdEhlaWdodCA9IGdldExhc3RIZWlnaHQoKTsKICAgIHJldHVybiBSZXNwb25zZUluZm8ubmV3QnVpbGRlcigpLnNldExhc3RCbG9ja0FwcEhhc2goQnl0ZVN0cmluZy5jb3B5RnJvbShsYXN0QXBwSGFzaCkpLnNldExhc3RCbG9ja0hlaWdodChsYXN0SGVpZ2h0KS5idWlsZCgpOwp9Cg=="}}),e._v(" "),n("h3",{attrs:{id:"genesis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#genesis"}},[e._v("#")]),e._v(" Genesis")]),e._v(" "),n("p",[n("code",[e._v("InitChain")]),e._v(" will be called once upon the genesis. "),n("code",[e._v("params")]),e._v(" includes the\ninitial validator set. Later on, it may be extended to take parts of the\nconsensus params.")]),e._v(" "),n("p",[e._v("In go:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ly8gU2F2ZSB0aGUgdmFsaWRhdG9ycyBpbiB0aGUgbWVya2xlIHRyZWUKZnVuYyAoYXBwICpQZXJzaXN0ZW50S1ZTdG9yZUFwcGxpY2F0aW9uKSBJbml0Q2hhaW4ocmVxIHR5cGVzLlJlcXVlc3RJbml0Q2hhaW4pIHR5cGVzLlJlc3BvbnNlSW5pdENoYWluIHsKCWZvciBfLCB2IDo9IHJhbmdlIHJlcS5WYWxpZGF0b3JzIHsKCQlyIDo9IGFwcC51cGRhdGVWYWxpZGF0b3IodikKCQlpZiByLklzRXJyKCkgewoJCQlhcHAubG9nZ2VyLkVycm9yKCZxdW90O0Vycm9yIHVwZGF0aW5nIHZhbGlkYXRvcnMmcXVvdDssICZxdW90O3ImcXVvdDssIHIpCgkJfQoJfQoJcmV0dXJuIHR5cGVzLlJlc3BvbnNlSW5pdENoYWlue30KfQo="}}),e._v(" "),n("p",[e._v("In Java:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"LyoKICogYWxsIHR5cGVzIGNvbWUgZnJvbSBwcm90b2J1ZiBkZWZpbml0aW9uCiAqLwpSZXNwb25zZUluaXRDaGFpbiByZXF1ZXN0SW5pdENoYWluKFJlcXVlc3RJbml0Q2hhaW4gcmVxKSB7CiAgICBmaW5hbCBpbnQgdmFsaWRhdG9yc0NvdW50ID0gcmVxLmdldFZhbGlkYXRvcnNDb3VudCgpOwogICAgZmluYWwgTGlzdCZsdDtUeXBlcy5WYWxpZGF0b3ImZ3Q7IHZhbGlkYXRvcnNMaXN0ID0gcmVxLmdldFZhbGlkYXRvcnNMaXN0KCk7CgogICAgdmFsaWRhdG9yc0xpc3QuZm9yRWFjaCgodmFsaWRhdG9yKSAtJmd0OyB7CiAgICAgICAgbG9uZyBwb3dlciA9IHZhbGlkYXRvci5nZXRQb3dlcigpOwogICAgICAgIGJ5dGVbXSB2YWxpZGF0b3JQdWJLZXkgPSB2YWxpZGF0b3IuZ2V0UHViS2V5KCkudG9CeXRlQXJyYXkoKTsKCiAgICAgICAgLy8gZG8gc29tZWhpbmcgZm9yIHZhbGlkYXRvciBzZXR1cCBpbiBhcHAKICAgIH0pOwoKICAgIHJldHVybiBSZXNwb25zZUluaXRDaGFpbi5uZXdCdWlsZGVyKCkuYnVpbGQoKTsKfQo="}})],1)}),[],!1,null,null,null);t.default=a.exports}}]);