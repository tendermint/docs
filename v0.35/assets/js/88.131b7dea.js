(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{639:function(g,I,C){"use strict";C.r(I);var c=C(0),l=Object(c.a)({},(function(){var g=this,I=g.$createElement,C=g._self._c||I;return C("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[C("h1",{attrs:{id:"reactor"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#reactor"}},[g._v("#")]),g._v(" Reactor")]),g._v(" "),C("p",[g._v("The Blocksync Reactor's high level responsibility is to enable peers who are\nfar behind the current state of the consensus to quickly catch up by downloading\nmany blocks in parallel, verifying their commits, and executing them against the\nABCI application.")]),g._v(" "),C("p",[g._v('Tendermint full nodes run the Blocksync Reactor as a service to provide blocks\nto new nodes. New nodes run the Blocksync Reactor in "fast_sync" mode,\nwhere they actively make requests for more blocks until they sync up.\nOnce caught up, "fast_sync" mode is disabled and the node switches to\nusing (and turns on) the Consensus Reactor.')]),g._v(" "),C("h2",{attrs:{id:"architecture-and-algorithm"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#architecture-and-algorithm"}},[g._v("#")]),g._v(" Architecture and algorithm")]),g._v(" "),C("p",[g._v("The Blocksync reactor is organised as a set of concurrent tasks:")]),g._v(" "),C("ul",[C("li",[g._v("Receive routine of Blocksync Reactor")]),g._v(" "),C("li",[g._v("Task for creating Requesters")]),g._v(" "),C("li",[g._v("Set of Requesters tasks and - Controller task.")])]),g._v(" "),C("p",[C("img",{attrs:{src:"img/bc-reactor.png",alt:"Blocksync Reactor Architecture Diagram"}})]),g._v(" "),C("h3",{attrs:{id:"data-structures"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#data-structures"}},[g._v("#")]),g._v(" Data structures")]),g._v(" "),C("p",[g._v("These are the core data structures necessarily to provide the Blocksync Reactor logic.")]),g._v(" "),C("p",[g._v("Requester data structure is used to track assignment of request for "),C("code",[g._v("block")]),g._v(" at position "),C("code",[g._v("height")]),g._v(" to a peer with id equals to "),C("code",[g._v("peerID")]),g._v(".")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBSZXF1ZXN0ZXIgewogIG10eCAgICAgICAgICBNdXRleAogIGJsb2NrICAgICAgICBCbG9jawogIGhlaWdodCAgICAgICBpbnQ2NAogIHBlZXJJRCAgICAgICBwMnAuSUQKICByZWRvQ2hhbm5lbCAgY2hhbiBwMnAuSUQgLy9yZWRvIG1heSBzZW5kIG11bHRpLXRpbWU7IHBlZXJJZCBpcyB1c2VkIHRvIGlkZW50aWZ5IHJlcGVhdAp9Cg=="}}),g._v(" "),C("p",[g._v("Pool is a core data structure that stores last executed block ("),C("code",[g._v("height")]),g._v("), assignment of requests to peers ("),C("code",[g._v("requesters")]),g._v("), current height for each peer and number of pending requests for each peer ("),C("code",[g._v("peers")]),g._v("), maximum peer height, etc.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQb29sIHsKICBtdHggICAgICAgICAgICAgICAgTXV0ZXgKICByZXF1ZXN0ZXJzICAgICAgICAgbWFwW2ludDY0XSpSZXF1ZXN0ZXIKICBoZWlnaHQgICAgICAgICAgICAgaW50NjQKICBwZWVycyAgICAgICAgICAgICAgbWFwW3AycC5JRF0qUGVlcgogIG1heFBlZXJIZWlnaHQgICAgICBpbnQ2NAogIG51bVBlbmRpbmcgICAgICAgICBpbnQzMgogIHN0b3JlICAgICAgICAgICAgICBCbG9ja1N0b3JlCiAgcmVxdWVzdHNDaGFubmVsICAgIGNoYW4mbHQ7LSBCbG9ja1JlcXVlc3QKICBlcnJvcnNDaGFubmVsICAgICAgY2hhbiZsdDstIHBlZXJFcnJvcgp9Cg=="}}),g._v(" "),C("p",[g._v("Peer data structure stores for each peer current "),C("code",[g._v("height")]),g._v(" and number of pending requests sent to the peer ("),C("code",[g._v("numPending")]),g._v("), etc.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQZWVyIHN0cnVjdCB7CiAgaWQgICAgICAgICAgIHAycC5JRAogIGhlaWdodCAgICAgICBpbnQ2NAogIG51bVBlbmRpbmcgICBpbnQzMgogIHRpbWVvdXQgICAgICAqdGltZS5UaW1lcgogIGRpZFRpbWVvdXQgICBib29sCn0K"}}),g._v(" "),C("p",[g._v("BlockRequest is internal data structure used to denote current mapping of request for a block at some "),C("code",[g._v("height")]),g._v(" to a peer ("),C("code",[g._v("PeerID")]),g._v(").")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCbG9ja1JlcXVlc3QgewogIEhlaWdodCBpbnQ2NAogIFBlZXJJRCBwMnAuSUQKfQo="}}),g._v(" "),C("h3",{attrs:{id:"receive-routine-of-blocksync-reactor"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#receive-routine-of-blocksync-reactor"}},[g._v("#")]),g._v(" Receive routine of Blocksync Reactor")]),g._v(" "),C("p",[g._v("It is executed upon message reception on the BlocksyncChannel inside p2p receive routine. There is a separate p2p receive routine (and therefore receive routine of the Blocksync Reactor) executed for each peer. Note that try to send will not block (returns immediately) if outgoing buffer is full.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aGFuZGxlTXNnKHBvb2wsIG0pOgogICAgdXBvbiByZWNlaXZpbmcgYmNCbG9ja1JlcXVlc3RNZXNzYWdlIG0gZnJvbSBwZWVyIHA6CiAgICAgIGJsb2NrID0gbG9hZCBibG9jayBmb3IgaGVpZ2h0IG0uSGVpZ2h0IGZyb20gcG9vbC5zdG9yZQogICAgICBpZiBibG9jayAhPSBuaWwgdGhlbgogICAgICAgIHRyeSB0byBzZW5kIEJsb2NrUmVzcG9uc2VNZXNzYWdlKGJsb2NrKSB0byBwCiAgICAgIGVsc2UKICAgICAgICB0cnkgdG8gc2VuZCBiY05vQmxvY2tSZXNwb25zZU1lc3NhZ2UobS5IZWlnaHQpIHRvIHAKCiAgICB1cG9uIHJlY2VpdmluZyBiY0Jsb2NrUmVzcG9uc2VNZXNzYWdlIG0gZnJvbSBwZWVyIHA6CiAgICAgIHBvb2wubXR4LkxvY2soKQogICAgICByZXF1ZXN0ZXIgPSBwb29sLnJlcXVlc3RlcnNbbS5IZWlnaHRdCiAgICAgIGlmIHJlcXVlc3RlciA9PSBuaWwgdGhlbgogICAgICAgIGVycm9yKCZxdW90O3BlZXIgc2VudCB1cyBhIGJsb2NrIHdlIGRpZG4ndCBleHBlY3QmcXVvdDspCiAgICAgICAgY29udGludWUKCiAgICAgIGlmIHJlcXVlc3Rlci5ibG9jayA9PSBuaWwgYW5kIHJlcXVlc3Rlci5wZWVySUQgPT0gcCB0aGVuCiAgICAgICAgcmVxdWVzdGVyLmJsb2NrID0gbQogICAgICAgIHBvb2wubnVtUGVuZGluZyAtPSAxICAvLyBhdG9taWMgZGVjcmVtZW50CiAgICAgICAgcGVlciA9IHBvb2wucGVlcnNbcF0KICAgICAgICBpZiBwZWVyICE9IG5pbCB0aGVuCiAgICAgICAgICBwZWVyLm51bVBlbmRpbmctLQogICAgICAgICAgaWYgcGVlci5udW1QZW5kaW5nID09IDAgdGhlbgogICAgICAgICAgICBwZWVyLnRpbWVvdXQuU3RvcCgpCiAgICAgICAgICAgIC8vIE5PVEU6IHdlIGRvbid0IHNlbmQgUXVpdCBzaWduYWwgdG8gdGhlIGNvcnJlc3BvbmRpbmcgcmVxdWVzdGVyIHRhc2shCiAgICAgICAgZWxzZQogICAgICAgICAgdHJpZ2dlciBwZWVyIHRpbWVvdXQgdG8gZXhwaXJlIGFmdGVyIHBlZXJUaW1lb3V0CiAgICAgIHBvb2wubXR4LlVubG9jaygpCgoKICAgIHVwb24gcmVjZWl2aW5nIGJjU3RhdHVzUmVxdWVzdE1lc3NhZ2UgbSBmcm9tIHBlZXIgcDoKICAgICAgdHJ5IHRvIHNlbmQgYmNTdGF0dXNSZXNwb25zZU1lc3NhZ2UocG9vbC5zdG9yZS5IZWlnaHQpCgogICAgdXBvbiByZWNlaXZpbmcgYmNTdGF0dXNSZXNwb25zZU1lc3NhZ2UgbSBmcm9tIHBlZXIgcDoKICAgICAgcG9vbC5tdHguTG9jaygpCiAgICAgIHBlZXIgPSBwb29sLnBlZXJzW3BdCiAgICAgIGlmIHBlZXIgIT0gbmlsIHRoZW4KICAgICAgICBwZWVyLmhlaWdodCA9IG0uaGVpZ2h0CiAgICAgIGVsc2UKICAgICAgICBwZWVyID0gY3JlYXRlIG5ldyBQZWVyIGRhdGEgc3RydWN0dXJlIHdpdGggaWQgPSBwIGFuZCBoZWlnaHQgPSBtLkhlaWdodAogICAgICAgIHBvb2wucGVlcnNbcF0gPSBwZWVyCgogICAgICBpZiBtLkhlaWdodCAmZ3Q7IHBvb2wubWF4UGVlckhlaWdodCB0aGVuCiAgICAgICAgcG9vbC5tYXhQZWVySGVpZ2h0ID0gbS5IZWlnaHQKICAgICAgcG9vbC5tdHguVW5sb2NrKCkKCm9uVGltZW91dChwKToKICBzZW5kIGVycm9yIG1lc3NhZ2UgdG8gcG9vbCBlcnJvciBjaGFubmVsCiAgcGVlciA9IHBvb2wucGVlcnNbcF0KICBwZWVyLmRpZFRpbWVvdXQgPSB0cnVlCg=="}}),g._v(" "),C("h3",{attrs:{id:"requester-tasks"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#requester-tasks"}},[g._v("#")]),g._v(" Requester tasks")]),g._v(" "),C("p",[g._v("Requester task is responsible for fetching a single block at position "),C("code",[g._v("height")]),g._v(".")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZmV0Y2hCbG9jayhoZWlnaHQsIHBvb2wpOgogIHdoaWxlIHRydWUgZG8gewogICAgcGVlcklEID0gbmlsCiAgICBibG9jayA9IG5pbAogICAgcGVlciA9IHBpY2tBdmFpbGFibGVQZWVyKGhlaWdodCkKICAgIHBlZXJJRCA9IHBlZXIuaWQKCiAgICBlbnF1ZXVlIEJsb2NrUmVxdWVzdChoZWlnaHQsIHBlZXJJRCkgdG8gcG9vbC5yZXF1ZXN0c0NoYW5uZWwKICAgIHJlZG8gPSBmYWxzZQogICAgd2hpbGUgIXJlZG8gZG8KICAgICAgc2VsZWN0IHsKICAgICAgICB1cG9uIHJlY2VpdmluZyBRdWl0IG1lc3NhZ2UgZG8KICAgICAgICAgIHJldHVybgogICAgICAgIHVwb24gcmVjZWl2aW5nIHJlZG8gbWVzc2FnZSB3aXRoIGlkIG9uIHJlZG9DaGFubmVsIGRvCiAgICAgICAgICBpZiBwZWVySUQgPT0gaWQgewogICAgICAgICAgICBtdHguTG9jaygpCiAgICAgICAgICAgIHBvb2wubnVtUGVuZGluZysrCiAgICAgICAgICAgIHJlZG8gPSB0cnVlCiAgICAgICAgICAgIG10eC5VbkxvY2soKQogICAgICAgICAgfQogICAgICB9CiAgICB9CgpwaWNrQXZhaWxhYmxlUGVlcihoZWlnaHQpOgogIHNlbGVjdGVkUGVlciA9IG5pbAogIHdoaWxlIHNlbGVjdGVkUGVlciA9IG5pbCBkbwogICAgcG9vbC5tdHguTG9jaygpCiAgICBmb3IgZWFjaCBwZWVyIGluIHBvb2wucGVlcnMgZG8KICAgICAgaWYgIXBlZXIuZGlkVGltZW91dCBhbmQgcGVlci5udW1QZW5kaW5nICZsdDsgbWF4UGVuZGluZ1JlcXVlc3RzUGVyUGVlciBhbmQgcGVlci5oZWlnaHQgJmd0Oz0gaGVpZ2h0IHRoZW4KICAgICAgICBwZWVyLm51bVBlbmRpbmcrKwogICAgICAgIHNlbGVjdGVkUGVlciA9IHBlZXIKICAgICAgICBicmVhawogICAgcG9vbC5tdHguVW5sb2NrKCkKCiAgICBpZiBzZWxlY3RlZFBlZXIgPSBuaWwgdGhlbgogICAgICBzbGVlcCByZXF1ZXN0SW50ZXJ2YWxNUwoKICByZXR1cm4gc2VsZWN0ZWRQZWVyCg=="}}),g._v(" "),C("p",[g._v("sleep for requestIntervalMS")]),g._v(" "),C("h3",{attrs:{id:"task-for-creating-requesters"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#task-for-creating-requesters"}},[g._v("#")]),g._v(" Task for creating Requesters")]),g._v(" "),C("p",[g._v("This task is responsible for continuously creating and starting Requester tasks.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3JlYXRlUmVxdWVzdGVycyhwb29sKToKICB3aGlsZSB0cnVlIGRvCiAgICBpZiAhcG9vbC5pc1J1bm5pbmcgdGhlbiBicmVhawogICAgaWYgcG9vbC5udW1QZW5kaW5nICZsdDsgbWF4UGVuZGluZ1JlcXVlc3RzIG9yIHNpemUocG9vbC5yZXF1ZXN0ZXJzKSAmbHQ7IG1heFRvdGFsUmVxdWVzdGVycyB0aGVuCiAgICAgIHBvb2wubXR4LkxvY2soKQogICAgICBuZXh0SGVpZ2h0ID0gcG9vbC5oZWlnaHQgKyBzaXplKHBvb2wucmVxdWVzdGVycykKICAgICAgcmVxdWVzdGVyID0gY3JlYXRlIG5ldyByZXF1ZXN0ZXIgZm9yIGhlaWdodCBuZXh0SGVpZ2h0CiAgICAgIHBvb2wucmVxdWVzdGVyc1tuZXh0SGVpZ2h0XSA9IHJlcXVlc3RlcgogICAgICBwb29sLm51bVBlbmRpbmcgKz0gMSAvLyBhdG9taWMgaW5jcmVtZW50CiAgICAgIHN0YXJ0IHJlcXVlc3RlciB0YXNrCiAgICAgIHBvb2wubXR4LlVubG9jaygpCiAgICBlbHNlCiAgICAgIHNsZWVwIHJlcXVlc3RJbnRlcnZhbE1TCiAgICAgIHBvb2wubXR4LkxvY2soKQogICAgICBmb3IgZWFjaCBwZWVyIGluIHBvb2wucGVlcnMgZG8KICAgICAgICBpZiAhcGVlci5kaWRUaW1lb3V0ICZhbXA7JmFtcDsgcGVlci5udW1QZW5kaW5nICZndDsgMCAmYW1wOyZhbXA7IHBlZXIuY3VyUmF0ZSAmbHQ7IG1pblJlY3ZSYXRlIHRoZW4KICAgICAgICAgIHNlbmQgZXJyb3Igb24gcG9vbCBlcnJvciBjaGFubmVsCiAgICAgICAgICBwZWVyLmRpZFRpbWVvdXQgPSB0cnVlCiAgICAgICAgaWYgcGVlci5kaWRUaW1lb3V0IHRoZW4KICAgICAgICAgIGZvciBlYWNoIHJlcXVlc3RlciBpbiBwb29sLnJlcXVlc3RlcnMgZG8KICAgICAgICAgICAgaWYgcmVxdWVzdGVyLmdldFBlZXJJRCgpID09IHBlZXIgdGhlbgogICAgICAgICAgICAgIGVucXVldWUgbXNnIG9uIHJlcXVlc3RvcidzIHJlZG9DaGFubmVsCiAgICAgICAgICBkZWxldGUocG9vbC5wZWVycywgcGVlcklEKQogICAgICBwb29sLm10eC5VbmxvY2soKQo="}}),g._v(" "),C("h3",{attrs:{id:"main-blocksync-reactor-controller-task"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#main-blocksync-reactor-controller-task"}},[g._v("#")]),g._v(" Main blocksync reactor controller task")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bWFpbihwb29sKToKICBjcmVhdGUgdHJ5U3luY1RpY2tlciB3aXRoIGludGVydmFsIHRyeVN5bmNJbnRlcnZhbE1TCiAgY3JlYXRlIHN0YXR1c1VwZGF0ZVRpY2tlciB3aXRoIGludGVydmFsIHN0YXR1c1VwZGF0ZUludGVydmFsU2Vjb25kcwogIGNyZWF0ZSBzd2l0Y2hUb0NvbnNlbnN1c1RpY2tlciB3aXRoIGludGVydmFsIHN3aXRjaFRvQ29uc2Vuc3VzSW50ZXJ2YWxTZWNvbmRzCgogIHdoaWxlIHRydWUgZG8KICAgIHNlbGVjdCB7CiAgIHVwb24gcmVjZWl2aW5nIEJsb2NrUmVxdWVzdChIZWlnaHQsIFBlZXIpIG9uIHBvb2wucmVxdWVzdHNDaGFubmVsOgogICAgIHRyeSB0byBzZW5kIGJjQmxvY2tSZXF1ZXN0TWVzc2FnZShIZWlnaHQpIHRvIFBlZXIKCiAgIHVwb24gcmVjZWl2aW5nIGVycm9yKHBlZXIpIG9uIGVycm9yc0NoYW5uZWw6CiAgICAgc3RvcCBwZWVyIGZvciBlcnJvcgoKICAgdXBvbiByZWNlaXZpbmcgbWVzc2FnZSBvbiBzdGF0dXNVcGRhdGVUaWNrZXJDaGFubmVsOgogICAgIGJyb2FkY2FzdCBiY1N0YXR1c1JlcXVlc3RNZXNzYWdlKGJjUi5zdG9yZS5IZWlnaHQpIC8vIG1lc3NhZ2Ugc2VudCBpbiBhIHNlcGFyYXRlIHJvdXRpbmUKCiAgIHVwb24gcmVjZWl2aW5nIG1lc3NhZ2Ugb24gc3dpdGNoVG9Db25zZW5zdXNUaWNrZXJDaGFubmVsOgogICAgIHBvb2wubXR4LkxvY2soKQogICAgIHJlY2VpdmVkQmxvY2tPclRpbWVkT3V0ID0gcG9vbC5oZWlnaHQgJmd0OyAwIHx8ICh0aW1lLk5vdygpIC0gcG9vbC5zdGFydFRpbWUpICZndDsgNSBTZWNvbmRzCiAgICAgb3VyQ2hhaW5Jc0xvbmdlc3RBbW9uZ1BlZXJzID0gcG9vbC5tYXhQZWVySGVpZ2h0ID09IDAgfHwgcG9vbC5oZWlnaHQgJmd0Oz0gcG9vbC5tYXhQZWVySGVpZ2h0CiAgICAgaGF2ZVNvbWVQZWVycyA9IHNpemUgb2YgcG9vbC5wZWVycyAmZ3Q7IDAKICAgICBwb29sLm10eC5VbmxvY2soKQogICAgIGlmIGhhdmVTb21lUGVlcnMgJmFtcDsmYW1wOyByZWNlaXZlZEJsb2NrT3JUaW1lZE91dCAmYW1wOyZhbXA7IG91ckNoYWluSXNMb25nZXN0QW1vbmdQZWVycyB0aGVuCiAgICAgICBzd2l0Y2ggdG8gY29uc2Vuc3VzIG1vZGUKCiAgICAgICAgICB1cG9uIHJlY2VpdmluZyBtZXNzYWdlIG9uIHRyeVN5bmNUaWNrZXJDaGFubmVsOgogICAgICAgICAgICBmb3IgaSA9IDA7IGkgJmx0OyAxMDsgaSsrIGRvCiAgICAgICAgICAgICAgcG9vbC5tdHguTG9jaygpCiAgICAgICAgICAgICAgZmlyc3RCbG9jayA9IHBvb2wucmVxdWVzdGVyc1twb29sLmhlaWdodF0uYmxvY2sKICAgICAgICAgICAgICBzZWNvbmRCbG9jayA9IHBvb2wucmVxdWVzdGVyc1twb29sLmhlaWdodF0uYmxvY2sKICAgICAgICAgICAgICBpZiBmaXJzdEJsb2NrID09IG5pbCBvciBzZWNvbmRCbG9jayA9PSBuaWwgdGhlbiBjb250aW51ZQogICAgICAgICAgICAgIHBvb2wubXR4LlVubG9jaygpCiAgICAgICAgICAgICAgdmVyaWZ5IGZpcnN0QmxvY2sgdXNpbmcgTGFzdENvbW1pdCBmcm9tIHNlY29uZEJsb2NrCiAgICAgICAgICAgICAgaWYgdmVyaWZpY2F0aW9uIGZhaWxlZAogICAgICAgICAgICAgICAgcG9vbC5tdHguTG9jaygpCiAgICAgICAgICAgICAgICBwZWVySUQgPSBwb29sLnJlcXVlc3RlcnNbcG9vbC5oZWlnaHRdLnBlZXJJRAogICAgICAgICAgICAgICAgcmVkb1JlcXVlc3RzRm9yUGVlcihwZWVySWQpCiAgICAgICAgICAgICAgICBkZWxldGUocG9vbC5wZWVycywgcGVlcklEKQogICAgICAgICAgICAgICAgc3RvcCBwZWVyIHBlZXJJRCBmb3IgZXJyb3IKICAgICAgICAgICAgICAgIHBvb2wubXR4LlVubG9jaygpCiAgICAgICAgICAgICAgZWxzZQogICAgICAgICAgICAgICAgZGVsZXRlKHBvb2wucmVxdWVzdGVycywgcG9vbC5oZWlnaHQpCiAgICAgICAgICAgICAgICBzYXZlIGZpcnN0QmxvY2sgdG8gc3RvcmUKICAgICAgICAgICAgICAgIHBvb2wuaGVpZ2h0KysKICAgICAgICAgICAgICAgIGV4ZWN1dGUgZmlyc3RCbG9jawogICAgfQoKcmVkb1JlcXVlc3RzRm9yUGVlcihwb29sLCBwZWVySWQpOgogIGZvciBlYWNoIHJlcXVlc3RlciBpbiBwb29sLnJlcXVlc3RlcnMgZG8KICAgIGlmIHJlcXVlc3Rlci5nZXRQZWVySUQoKSA9PSBwZWVySUQKICAgICBlbnF1ZXVlIG1zZyBvbiByZWRvQ2hhbm5lbCBmb3IgcmVxdWVzdGVyCg=="}}),g._v(" "),C("h2",{attrs:{id:"channels"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[g._v("#")]),g._v(" Channels")]),g._v(" "),C("p",[g._v("Defines "),C("code",[g._v("maxMsgSize")]),g._v(" for the maximum size of incoming messages,\n"),C("code",[g._v("SendQueueCapacity")]),g._v(" and "),C("code",[g._v("RecvBufferCapacity")]),g._v(" for maximum sending and\nreceiving buffers respectively. These are supposed to prevent amplification\nattacks by setting up the upper limit on how much data we can receive & send to\na peer.")]),g._v(" "),C("p",[g._v("Sending incorrectly encoded data will result in stopping the peer.")])],1)}),[],!1,null,null,null);I.default=l.exports}}]);