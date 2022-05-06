(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{811:function(e,t,n){"use strict";n.r(t);var s=n(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-72-restore-requests-for-comments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-72-restore-requests-for-comments"}},[e._v("#")]),e._v(" ADR 72: Restore Requests for Comments")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("ul",[n("li",[e._v("20-Aug-2021: Initial draft (@creachadair)")])]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("Implemented")]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("In the past, we kept a collection of Request for Comments (RFC) documents in "),n("code",[e._v("docs/rfc")]),e._v(".\nPrior to the creation of the ADR process, these documents were used to document\ndesign and implementation decisions about Tendermint Core. The RFC directory\nwas removed in favor of ADRs, in commit 3761aa69 (PR\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/6345",target:"_blank",rel:"noopener noreferrer"}},[e._v("#6345"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("p",[e._v("For issues where an explicit design decision or implementation change is\nrequired, an ADR is generally preferable to an open-ended RFC: An ADR is\nrelatively narrowly-focused, identifies a specific design or implementation\nquestion, and documents the consensus answer to that question.")]),e._v(" "),n("p",[e._v("Some discussions are more open-ended, however, or don't require a specific\ndecision to be made (yet). Such conversations are still valuable to document,\nand several members of the Tendermint team have been doing so by writing gists\nor Google docs to share them around. That works well enough in the moment, but\ngists do not support any kind of collaborative editing, and both gists and docs\nare hard to discover after the fact. Google docs have much better collaborative\nediting, but are worse for discoverability, especially when contributors span\ndifferent Google accounts.")]),e._v(" "),n("p",[e._v("Discoverability is important, because these kinds of open-ended discussions are\nuseful to people who come later -- either as new team members or as outside\ncontributors seeking to use and understand the thoughts behind our designs and\nthe architectural decisions that arose from those discussion.")]),e._v(" "),n("p",[e._v("With these in mind, I propose that:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("We re-create a new, initially empty "),n("code",[e._v("docs/rfc")]),e._v(" directory in the repository,\nand use it to capture these kinds of open-ended discussions in supplement to\nADRs.")])]),e._v(" "),n("li",[n("p",[e._v("Unlike in the previous RFC scheme, documents in this new directory will\n"),n("em",[e._v("not")]),e._v(" be used directly for decision-making. This is the key difference\nbetween an RFC and an ADR.")]),e._v(" "),n("p",[e._v("Instead, an RFC will exist to document background, articulate general\nprinciples, and serve as a historical record of discussion and motivation.")]),e._v(" "),n("p",[e._v("In this system, an RFC may "),n("em",[e._v("only")]),e._v(" result in a decision indirectly, via ADR\ndocuments created in response to the RFC.")]),e._v(" "),n("p",[n("strong",[e._v("In short:")]),e._v(" If a decision is required, write an ADR; otherwise if a\nsufficiently broad discussion is needed, write an RFC.")])])]),e._v(" "),n("p",[e._v("Just so that there is a consistent format, I also propose that:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("RFC files are named "),n("code",[e._v("rfc-XXX-title.{md,rst,txt}")]),e._v(" and are written in plain\ntext, Markdown, or ReStructured Text.")])]),e._v(" "),n("li",[n("p",[e._v("Like an ADR, an RFC should include a high-level change log at the top of the\ndocument, and sections for:")]),e._v(" "),n("ul",[n("li",[e._v("Abstract: A brief, high-level synopsis of the topic.")]),e._v(" "),n("li",[e._v("Background: Any background necessary to understand the topic.")]),e._v(" "),n("li",[e._v("Discussion: Detailed discussion of the issue being considered.")])])]),e._v(" "),n("li",[n("p",[e._v("Unlike an ADR, an RFC does "),n("em",[e._v("not")]),e._v(" include sections for Decisions, Detailed\nDesign, or evaluation of proposed solutions. If an RFC leads to a proposal\nfor an actual architectural change, that must be recorded in an ADR in the\nusual way, and may refer back to the RFC in its References section.")])])]),e._v(" "),n("h2",{attrs:{id:"alternative-approaches"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),n("p",[e._v("Leaving aside implementation details, the main alternative to this proposal is\nto leave things as they are now, with ADRs as the only log of record and other\ndiscussions being held informally in whatever medium is convenient at the time.")]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),n("p",[e._v("(pending)")]),e._v(" "),n("h2",{attrs:{id:"detailed-design"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Create a new "),n("code",[e._v("docs/rfc")]),e._v(" directory in the "),n("code",[e._v("tendermint")]),e._v(" repository. Note that\nthis proposal intentionally does "),n("em",[e._v("not")]),e._v(" pull back the previous contents of\nthat path from Git history, as those documents were appropriately merged into\nthe ADR process.")])]),e._v(" "),n("li",[n("p",[e._v("Create a "),n("code",[e._v("README.md")]),e._v(" for RFCs that explains the rules and their relationship\nto ADRs.")])]),e._v(" "),n("li",[n("p",[e._v("Create an "),n("code",[e._v("rfc-template.md")]),e._v(" file for RFC files.")])])]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("We will have a more discoverable place to record open-ended discussions that\ndo not immediately result in a design change.")])]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("Potentially some people could be confused about the RFC/ADR distinction.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);