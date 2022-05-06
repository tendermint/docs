(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{813:function(e,t,n){"use strict";n.r(t);var a=n(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-076-combine-spec-and-tendermint-repositories"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-076-combine-spec-and-tendermint-repositories"}},[e._v("#")]),e._v(" ADR 076: Combine Spec and Tendermint Repositories")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("ul",[n("li",[e._v("2022-02-04: Initial Draft. (@tychoish)")])]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("Accepted.")]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("While the specification for Tendermint was originally in the same\nrepository as the Go implementation, at some point the specification\nwas split from the core repository and maintained separately from the\nimplementation. While this makes sense in promoting a conceptual\nseparation of specification and implementation, in practice this\nseparation was a premature optimization, apparently aimed at supporting\nalternate implementations of Tendermint.")]),e._v(" "),n("p",[e._v("The operational and documentary burden of maintaining a separate\nspec repo has not returned value to justify its cost. There are no active\nprojects to develop alternate implementations of Tendermint based on the\ncommon specification, and having separate repositories creates an ongoing\nburden to coordinate versions, documentation, and releases.")]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),n("p",[e._v("The specification repository will be merged back into the Tendermint\ncore repository.")]),e._v(" "),n("p",[e._v("Stakeholders including representatives from the maintainers of the\nspec, the Go implementation, and the Tendermint Rust library, agreed\nto merge the repositories in the Tendermint core dev meeting on 27\nJanuary 2022, including @williambanfield @cmwaters @creachadair and\n@thanethomson.")]),e._v(" "),n("h2",{attrs:{id:"alternative-approaches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),n("p",[e._v("The main alternative we considered was to keep separate repositories,\nand to introduce a coordinated versioning scheme between the two, so\nthat users could figure out which spec versions go with which versions\nof the core implementation.")]),e._v(" "),n("p",[e._v("We decided against this on the grounds that it would further complicate\nthe release process for "),n("em",[e._v("both")]),e._v(" repositories, without mitigating any of\nthe other existing issues.")]),e._v(" "),n("h2",{attrs:{id:"detailed-design"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),n("p",[e._v("Clone and merge the master branch of the "),n("code",[e._v("tendermint/spec")]),e._v(" repository\nas a branch of the "),n("code",[e._v("tendermint/tendermint")]),e._v(", to ensure the commit history\nof both repositories remains intact.")]),e._v(" "),n("h3",{attrs:{id:"implementation-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implementation-instructions"}},[e._v("#")]),e._v(" Implementation Instructions")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Within the "),n("code",[e._v("tendermint")]),e._v(" repository, execute the following commands\nto add a new branch with the history of the master branch of "),n("code",[e._v("spec")]),e._v(":")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IHJlbW90ZSBhZGQgc3BlYyBnaXRAZ2l0aHViLmNvbTp0ZW5kZXJtaW50L3NwZWMuZ2l0CmdpdCBmZXRjaCBzcGVjCmdpdCBjaGVja291dCAtYiBzcGVjLW1hc3RlciBzcGVjL21hc3Rlcgpta2RpciBzcGVjCiBnaXQgbHMtdHJlZSAteiAtLW5hbWUtb25seSBIRUFEIHwgeGFyZ3MgLTAgLUkge30gZ2l0IG12IHt9IHN1YmRpci8KIGdpdCBjb21taXQgLW0gJnF1b3Q7c3BlYzogb3JnYW5pemUgc3BlY2lmaWNhdGlvbiBwcmlvciB0byBtZXJnZSZxdW90OwogZ2l0IGNoZWNrb3V0IC1iIHNwZWMtbWVyZ2UtbWFpbmxpbmUgb3JpZ2luL21hc3RlcgogZ2l0IG1lcmdlIC0tYWxsb3ctdW5yZWxhdGVkLWhpc3RvcmllcyBzcGVjLW1hc3Rlcgo="}}),e._v(" "),n("p",[e._v("This merges the spec into the "),n("code",[e._v("tendermint/tendermint")]),e._v(" repository as\na normal branch. This commit can also be backported to the 0.35\nbranch, if needed.")])],1),e._v(" "),n("li",[n("p",[e._v("Migrate outstanding issues from "),n("code",[e._v("tendermint/spec")]),e._v(" to the\n"),n("code",[e._v("tendermint/tendermint")]),e._v(" repository.")])]),e._v(" "),n("li",[n("p",[e._v("In the specification repository, add redirect to the README and mark\nthe repository as archived.")])])]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("p",[e._v("Easier maintenance for the specification will obviate a number of\ncomplicated and annoying versioning problems, and will help prevent the\npossibility of the specification and the implementation drifting apart.")]),e._v(" "),n("p",[e._v("Additionally, co-locating the specification will help encourage\ncross-pollination and collaboration, between engineers focusing on the\nspecification and the protocol and engineers focusing on the implementation.")]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("p",[e._v("Co-locating the spec and Go implementation has the potential effect of\nprioritizing the Go implementation with regards to the spec, and\nmaking it difficult to think about alternate implementations of the\nTendermint algorithm. Although we may want to foster additional\nTendermint implementations in the future, this isn't an active goal\nin our current roadmap, and "),n("em",[e._v("not")]),e._v(" merging these repos doesn't\nchange the fact that the Go implementation of Tendermint is already the\nprimary implementation.")]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),n("p",[e._v("N/A")]),e._v(" "),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),n("ul",[n("li",[e._v("https://github.com/tendermint/spec")]),e._v(" "),n("li",[e._v("https://github.com/tendermint/tendermint")])])])}),[],!1,null,null,null);t.default=i.exports}}]);