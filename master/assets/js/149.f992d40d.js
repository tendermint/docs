(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{837:function(t,e,_){"use strict";_.r(e);var v=_(1),s=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"metrics"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[t._v("#")]),t._v(" Metrics")]),t._v(" "),_("p",[t._v("Tendermint can report and serve the Prometheus metrics, which in their turn can\nbe consumed by Prometheus collector(s).")]),t._v(" "),_("p",[t._v("This functionality is disabled by default.")]),t._v(" "),_("p",[t._v("To enable the Prometheus metrics, set "),_("code",[t._v("instrumentation.prometheus=true")]),t._v(" in your\nconfig file. Metrics will be served under "),_("code",[t._v("/metrics")]),t._v(" on 26660 port by default.\nListen address can be changed in the config file (see\n"),_("code",[t._v("instrumentation.prometheus\\_listen\\_addr")]),t._v(").")]),t._v(" "),_("h2",{attrs:{id:"list-of-available-metrics"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#list-of-available-metrics"}},[t._v("#")]),t._v(" List of available metrics")]),t._v(" "),_("p",[t._v("The following metrics are available:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("Name")])]),t._v(" "),_("th",[_("strong",[t._v("Type")])]),t._v(" "),_("th",[_("strong",[t._v("Tags")])]),t._v(" "),_("th",[_("strong",[t._v("Description")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("abci_connection_method_timing")]),t._v(" "),_("td",[t._v("Histogram")]),t._v(" "),_("td",[t._v("method, type")]),t._v(" "),_("td",[t._v("Timings for each of the ABCI methods")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_height")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Height of the chain")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_validators")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Number of validators")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_validators_power")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Total voting power of all validators")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_validator_power")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Voting power of the node if in the validator set")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_validator_last_signed_height")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Last height the node signed a block, if the node is a validator")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_validator_missed_blocks")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Total amount of blocks missed for the node, if the node is a validator")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_missing_validators")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Number of validators who did not sign")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_missing_validators_power")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Total voting power of the missing validators")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_byzantine_validators")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Number of validators who tried to double sign")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_byzantine_validators_power")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Total voting power of the byzantine validators")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_block_interval_seconds")]),t._v(" "),_("td",[t._v("Histogram")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Time between this and last block (Block.Header.Time) in seconds")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_rounds")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Number of rounds")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_num_txs")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Number of transactions")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_total_txs")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Total number of transactions committed")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_block_parts")]),t._v(" "),_("td",[t._v("counter")]),t._v(" "),_("td",[t._v("peer_id")]),t._v(" "),_("td",[t._v("number of blockparts transmitted by peer")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_latest_block_height")]),t._v(" "),_("td",[t._v("gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("/status sync_info number")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_fast_syncing")]),t._v(" "),_("td",[t._v("gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("either 0 (not fast syncing) or 1 (syncing)")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_state_syncing")]),t._v(" "),_("td",[t._v("gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("either 0 (not state syncing) or 1 (syncing)")])]),t._v(" "),_("tr",[_("td",[t._v("consensus_block_size_bytes")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Block size in bytes")])]),t._v(" "),_("tr",[_("td",[t._v("evidence_pool_num_evidence")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Number of evidence in the evidence pool")])]),t._v(" "),_("tr",[_("td",[t._v("p2p_peers")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Number of peers node's connected to")])]),t._v(" "),_("tr",[_("td",[t._v("p2p_peer_receive_bytes_total")]),t._v(" "),_("td",[t._v("counter")]),t._v(" "),_("td",[t._v("peer_id, chID")]),t._v(" "),_("td",[t._v("number of bytes per channel received from a given peer")])]),t._v(" "),_("tr",[_("td",[t._v("p2p_peer_send_bytes_total")]),t._v(" "),_("td",[t._v("counter")]),t._v(" "),_("td",[t._v("peer_id, chID")]),t._v(" "),_("td",[t._v("number of bytes per channel sent to a given peer")])]),t._v(" "),_("tr",[_("td",[t._v("p2p_peer_pending_send_bytes")]),t._v(" "),_("td",[t._v("gauge")]),t._v(" "),_("td",[t._v("peer_id")]),t._v(" "),_("td",[t._v("number of pending bytes to be sent to a given peer")])]),t._v(" "),_("tr",[_("td",[t._v("p2p_num_txs")]),t._v(" "),_("td",[t._v("gauge")]),t._v(" "),_("td",[t._v("peer_id")]),t._v(" "),_("td",[t._v("number of transactions submitted by each peer_id")])]),t._v(" "),_("tr",[_("td",[t._v("p2p_pending_send_bytes")]),t._v(" "),_("td",[t._v("gauge")]),t._v(" "),_("td",[t._v("peer_id")]),t._v(" "),_("td",[t._v("amount of data pending to be sent to peer")])]),t._v(" "),_("tr",[_("td",[t._v("mempool_size")]),t._v(" "),_("td",[t._v("Gauge")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Number of uncommitted transactions")])]),t._v(" "),_("tr",[_("td",[t._v("mempool_tx_size_bytes")]),t._v(" "),_("td",[t._v("histogram")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("transaction sizes in bytes")])]),t._v(" "),_("tr",[_("td",[t._v("mempool_failed_txs")]),t._v(" "),_("td",[t._v("counter")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("number of failed transactions")])]),t._v(" "),_("tr",[_("td",[t._v("mempool_recheck_times")]),t._v(" "),_("td",[t._v("counter")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("number of transactions rechecked in the mempool")])]),t._v(" "),_("tr",[_("td",[t._v("state_block_processing_time")]),t._v(" "),_("td",[t._v("histogram")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("time between BeginBlock and EndBlock in ms")])])])]),t._v(" "),_("h2",{attrs:{id:"useful-queries"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#useful-queries"}},[t._v("#")]),t._v(" Useful queries")]),t._v(" "),_("p",[t._v("Percentage of missing + byzantine validators:")]),t._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"prometheus",base64:"KChjb25zZW5zdXNfYnl6YW50aW5lX3ZhbGlkYXRvcnNfcG93ZXIgKyBjb25zZW5zdXNfbWlzc2luZ192YWxpZGF0b3JzX3Bvd2VyKSAvIGNvbnNlbnN1c192YWxpZGF0b3JzX3Bvd2VyKSAqIDEwMAo="}}),t._v(" "),_("p",[t._v("Rate at which the application is responding to each ABCI method call.")]),t._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3VtKHJhdGUodGVuZGVybWludF9hYmNpX2Nvbm5lY3Rpb25fbWV0aG9kX3RpbWluZ19jb3VudFs1bV0pKSBieSAobWV0aG9kKQo="}}),t._v(" "),_("p",[t._v("The 95th percentile response time for the application to the "),_("code",[t._v("deliver_tx")]),t._v(" ABCI method call.")]),t._v(" "),_("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"aGlzdG9ncmFtX3F1YW50aWxlKDAuOTUsIHN1bSBieShsZSkgKHJhdGUodGVuZGVybWludF9hYmNpX2Nvbm5lY3Rpb25fbWV0aG9kX3RpbWluZ19idWNrZXR7bWV0aG9kPSZxdW90O2RlbGl2ZXJfdHgmcXVvdDt9WzVtXSkpKQo="}})],1)}),[],!1,null,null,null);e.default=s.exports}}]);