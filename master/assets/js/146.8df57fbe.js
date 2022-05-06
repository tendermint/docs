(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{879:function(I,l,Z){"use strict";Z.r(l);var d=Z(1),b=Object(d.a)({},(function(){var I=this,l=I.$createElement,Z=I._self._c||l;return Z("ContentSlotsDistributor",{attrs:{"slot-key":I.$parent.slotKey}},[Z("h1",{attrs:{id:"configuration"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[I._v("#")]),I._v(" Configuration")]),I._v(" "),Z("p",[I._v("Tendermint Core can be configured via a TOML file in\n"),Z("code",[I._v("$TMHOME/config/config.toml")]),I._v(". Some of these parameters can be overridden by\ncommand-line flags. For most users, the options in the "),Z("code",[I._v("##### main base configuration options #####")]),I._v(" are intended to be modified while config options\nfurther below are intended for advance power users.")]),I._v(" "),Z("h2",{attrs:{id:"options"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[I._v("#")]),I._v(" Options")]),I._v(" "),Z("p",[I._v("The default configuration file create by "),Z("code",[I._v("tendermint init")]),I._v(" has all\nthe parameters set with their default values. It will look something\nlike the file below, however, double check by inspecting the\n"),Z("code",[I._v("config.toml")]),I._v(" created with your version of "),Z("code",[I._v("tendermint")]),I._v(" installed:")]),I._v(" "),Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"toml",base64:"IyBUaGlzIGlzIGEgVE9NTCBjb25maWcgZmlsZS4KIyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90b21sLWxhbmcvdG9tbAoKIyBOT1RFOiBBbnkgcGF0aCBiZWxvdyBjYW4gYmUgYWJzb2x1dGUgKGUuZy4gJnF1b3Q7L3Zhci9teWF3ZXNvbWVhcHAvZGF0YSZxdW90Oykgb3IKIyByZWxhdGl2ZSB0byB0aGUgaG9tZSBkaXJlY3RvcnkgKGUuZy4gJnF1b3Q7ZGF0YSZxdW90OykuIFRoZSBob21lIGRpcmVjdG9yeSBpcwojICZxdW90OyRIT01FLy50ZW5kZXJtaW50JnF1b3Q7IGJ5IGRlZmF1bHQsIGJ1dCBjb3VsZCBiZSBjaGFuZ2VkIHZpYSAkVE1IT01FIGVudiB2YXJpYWJsZQojIG9yIC0taG9tZSBjbWQgZmxhZy4KCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICAgICAgICAgICAgICBNYWluIEJhc2UgQ29uZmlnIE9wdGlvbnMgICAgICAgICAgICAgICAgICAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCgojIFRDUCBvciBVTklYIHNvY2tldCBhZGRyZXNzIG9mIHRoZSBBQkNJIGFwcGxpY2F0aW9uLAojIG9yIHRoZSBuYW1lIG9mIGFuIEFCQ0kgYXBwbGljYXRpb24gY29tcGlsZWQgaW4gd2l0aCB0aGUgVGVuZGVybWludCBiaW5hcnkKcHJveHktYXBwID0gJnF1b3Q7dGNwOi8vMTI3LjAuMC4xOjI2NjU4JnF1b3Q7CgojIEEgY3VzdG9tIGh1bWFuIHJlYWRhYmxlIG5hbWUgZm9yIHRoaXMgbm9kZQptb25pa2VyID0gJnF1b3Q7c2lkZXdpbmRlciZxdW90OwoKIyBNb2RlIG9mIE5vZGU6IGZ1bGwgfCB2YWxpZGF0b3IgfCBzZWVkCiMgKiB2YWxpZGF0b3Igbm9kZQojICAgLSBhbGwgcmVhY3RvcnMKIyAgIC0gd2l0aCBwcml2X3ZhbGlkYXRvcl9rZXkuanNvbiwgcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbgojICogZnVsbCBub2RlCiMgICAtIGFsbCByZWFjdG9ycwojICAgLSBObyBwcml2X3ZhbGlkYXRvcl9rZXkuanNvbiwgcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbgojICogc2VlZCBub2RlCiMgICAtIG9ubHkgUDJQLCBQRVggUmVhY3RvcgojICAgLSBObyBwcml2X3ZhbGlkYXRvcl9rZXkuanNvbiwgcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbgptb2RlID0gJnF1b3Q7dmFsaWRhdG9yJnF1b3Q7CgojIERhdGFiYXNlIGJhY2tlbmQ6IGdvbGV2ZWxkYiB8IGNsZXZlbGRiIHwgYm9sdGRiIHwgcm9ja3NkYiB8IGJhZGdlcmRiCiMgKiBnb2xldmVsZGIgKGdpdGh1Yi5jb20vc3luZHRyL2dvbGV2ZWxkYiAtIG1vc3QgcG9wdWxhciBpbXBsZW1lbnRhdGlvbikKIyAgIC0gcHVyZSBnbwojICAgLSBzdGFibGUKIyAqIGNsZXZlbGRiICh1c2VzIGxldmlnbyB3cmFwcGVyKQojICAgLSBmYXN0CiMgICAtIHJlcXVpcmVzIGdjYwojICAgLSB1c2UgY2xldmVsZGIgYnVpbGQgdGFnIChnbyBidWlsZCAtdGFncyBjbGV2ZWxkYikKIyAqIGJvbHRkYiAodXNlcyBldGNkJ3MgZm9yayBvZiBib2x0IC0gZ2l0aHViLmNvbS9ldGNkLWlvL2Jib2x0KQojICAgLSBFWFBFUklNRU5UQUwKIyAgIC0gbWF5IGJlIGZhc3RlciBpcyBzb21lIHVzZS1jYXNlcyAocmFuZG9tIHJlYWRzIC0gaW5kZXhlcikKIyAgIC0gdXNlIGJvbHRkYiBidWlsZCB0YWcgKGdvIGJ1aWxkIC10YWdzIGJvbHRkYikKIyAqIHJvY2tzZGIgKHVzZXMgZ2l0aHViLmNvbS90ZWNib3QvZ29yb2Nrc2RiKQojICAgLSBFWFBFUklNRU5UQUwKIyAgIC0gcmVxdWlyZXMgZ2NjCiMgICAtIHVzZSByb2Nrc2RiIGJ1aWxkIHRhZyAoZ28gYnVpbGQgLXRhZ3Mgcm9ja3NkYikKIyAqIGJhZGdlcmRiICh1c2VzIGdpdGh1Yi5jb20vZGdyYXBoLWlvL2JhZGdlcikKIyAgIC0gRVhQRVJJTUVOVEFMCiMgICAtIHVzZSBiYWRnZXJkYiBidWlsZCB0YWcgKGdvIGJ1aWxkIC10YWdzIGJhZGdlcmRiKQpkYi1iYWNrZW5kID0gJnF1b3Q7Z29sZXZlbGRiJnF1b3Q7CgojIERhdGFiYXNlIGRpcmVjdG9yeQpkYi1kaXIgPSAmcXVvdDtkYXRhJnF1b3Q7CgojIE91dHB1dCBsZXZlbCBmb3IgbG9nZ2luZywgaW5jbHVkaW5nIHBhY2thZ2UgbGV2ZWwgb3B0aW9ucwpsb2ctbGV2ZWwgPSAmcXVvdDtpbmZvJnF1b3Q7CgojIE91dHB1dCBmb3JtYXQ6ICdwbGFpbicgKGNvbG9yZWQgdGV4dCkgb3IgJ2pzb24nCmxvZy1mb3JtYXQgPSAmcXVvdDtwbGFpbiZxdW90OwoKIyMjIyMgYWRkaXRpb25hbCBiYXNlIGNvbmZpZyBvcHRpb25zICMjIyMjCgojIFBhdGggdG8gdGhlIEpTT04gZmlsZSBjb250YWluaW5nIHRoZSBpbml0aWFsIHZhbGlkYXRvciBzZXQgYW5kIG90aGVyIG1ldGEgZGF0YQpnZW5lc2lzLWZpbGUgPSAmcXVvdDtjb25maWcvZ2VuZXNpcy5qc29uJnF1b3Q7CgojIFBhdGggdG8gdGhlIEpTT04gZmlsZSBjb250YWluaW5nIHRoZSBwcml2YXRlIGtleSB0byB1c2UgZm9yIG5vZGUgYXV0aGVudGljYXRpb24gaW4gdGhlIHAycCBwcm90b2NvbApub2RlLWtleS1maWxlID0gJnF1b3Q7Y29uZmlnL25vZGVfa2V5Lmpzb24mcXVvdDsKCiMgTWVjaGFuaXNtIHRvIGNvbm5lY3QgdG8gdGhlIEFCQ0kgYXBwbGljYXRpb246IHNvY2tldCB8IGdycGMKYWJjaSA9ICZxdW90O3NvY2tldCZxdW90OwoKIyBJZiB0cnVlLCBxdWVyeSB0aGUgQUJDSSBhcHAgb24gY29ubmVjdGluZyB0byBhIG5ldyBwZWVyCiMgc28gdGhlIGFwcCBjYW4gZGVjaWRlIGlmIHdlIHNob3VsZCBrZWVwIHRoZSBjb25uZWN0aW9uIG9yIG5vdApmaWx0ZXItcGVlcnMgPSBmYWxzZQoKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgIFByaXYgVmFsaWRhdG9yIENvbmZpZ3VyYXRpb24gICAgICAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCltwcml2LXZhbGlkYXRvcl0KCiMgUGF0aCB0byB0aGUgSlNPTiBmaWxlIGNvbnRhaW5pbmcgdGhlIHByaXZhdGUga2V5IHRvIHVzZSBhcyBhIHZhbGlkYXRvciBpbiB0aGUgY29uc2Vuc3VzIHByb3RvY29sCmtleS1maWxlID0gJnF1b3Q7Y29uZmlnL3ByaXZfdmFsaWRhdG9yX2tleS5qc29uJnF1b3Q7CgojIFBhdGggdG8gdGhlIEpTT04gZmlsZSBjb250YWluaW5nIHRoZSBsYXN0IHNpZ24gc3RhdGUgb2YgYSB2YWxpZGF0b3IKc3RhdGUtZmlsZSA9ICZxdW90O2RhdGEvcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbiZxdW90OwoKIyBUQ1Agb3IgVU5JWCBzb2NrZXQgYWRkcmVzcyBmb3IgVGVuZGVybWludCB0byBsaXN0ZW4gb24gZm9yCiMgY29ubmVjdGlvbnMgZnJvbSBhbiBleHRlcm5hbCBQcml2VmFsaWRhdG9yIHByb2Nlc3MKIyB3aGVuIHRoZSBsaXN0ZW5BZGRyIGlzIHByZWZpeGVkIHdpdGggZ3JwYyBpbnN0ZWFkIG9mIHRjcCBpdCB3aWxsIHVzZSB0aGUgZ1JQQyBDbGllbnQKbGFkZHIgPSAmcXVvdDsmcXVvdDsKCiMgUGF0aCB0byB0aGUgY2xpZW50IGNlcnRpZmljYXRlIGdlbmVyYXRlZCB3aGlsZSBjcmVhdGluZyBuZWVkZWQgZmlsZXMgZm9yIHNlY3VyZSBjb25uZWN0aW9uLgojIElmIGEgcmVtb3RlIHZhbGlkYXRvciBhZGRyZXNzIGlzIHByb3ZpZGVkIGJ1dCBubyBjZXJ0aWZpY2F0ZSwgdGhlIGNvbm5lY3Rpb24gd2lsbCBiZSBpbnNlY3VyZQpjbGllbnQtY2VydGlmaWNhdGUtZmlsZSA9ICZxdW90OyZxdW90OwoKIyBDbGllbnQga2V5IGdlbmVyYXRlZCB3aGlsZSBjcmVhdGluZyBjZXJ0aWZpY2F0ZXMgZm9yIHNlY3VyZSBjb25uZWN0aW9uCmNsaWVudC1rZXktZmlsZSA9ICZxdW90OyZxdW90OwoKIyBQYXRoIHRvIHRoZSBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSB1c2VkIHRvIHNpZ24gYm90aCBjbGllbnQgYW5kIHNlcnZlciBjZXJ0aWZpY2F0ZXMKcm9vdC1jYS1maWxlID0gJnF1b3Q7JnF1b3Q7CgoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgICAgICAgICAgICBBZHZhbmNlZCBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICAgICAgICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgIFJQQyBTZXJ2ZXIgQ29uZmlndXJhdGlvbiBPcHRpb25zICAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCltycGNdCgojIFRDUCBvciBVTklYIHNvY2tldCBhZGRyZXNzIGZvciB0aGUgUlBDIHNlcnZlciB0byBsaXN0ZW4gb24KbGFkZHIgPSAmcXVvdDt0Y3A6Ly8xMjcuMC4wLjE6MjY2NTcmcXVvdDsKCiMgQSBsaXN0IG9mIG9yaWdpbnMgYSBjcm9zcy1kb21haW4gcmVxdWVzdCBjYW4gYmUgZXhlY3V0ZWQgZnJvbQojIERlZmF1bHQgdmFsdWUgJ1tdJyBkaXNhYmxlcyBjb3JzIHN1cHBvcnQKIyBVc2UgJ1smcXVvdDsqJnF1b3Q7XScgdG8gYWxsb3cgYW55IG9yaWdpbgpjb3JzLWFsbG93ZWQtb3JpZ2lucyA9IFtdCgojIEEgbGlzdCBvZiBtZXRob2RzIHRoZSBjbGllbnQgaXMgYWxsb3dlZCB0byB1c2Ugd2l0aCBjcm9zcy1kb21haW4gcmVxdWVzdHMKY29ycy1hbGxvd2VkLW1ldGhvZHMgPSBbJnF1b3Q7SEVBRCZxdW90OywgJnF1b3Q7R0VUJnF1b3Q7LCAmcXVvdDtQT1NUJnF1b3Q7LCBdCgojIEEgbGlzdCBvZiBub24gc2ltcGxlIGhlYWRlcnMgdGhlIGNsaWVudCBpcyBhbGxvd2VkIHRvIHVzZSB3aXRoIGNyb3NzLWRvbWFpbiByZXF1ZXN0cwpjb3JzLWFsbG93ZWQtaGVhZGVycyA9IFsmcXVvdDtPcmlnaW4mcXVvdDssICZxdW90O0FjY2VwdCZxdW90OywgJnF1b3Q7Q29udGVudC1UeXBlJnF1b3Q7LCAmcXVvdDtYLVJlcXVlc3RlZC1XaXRoJnF1b3Q7LCAmcXVvdDtYLVNlcnZlci1UaW1lJnF1b3Q7LCBdCgojIEFjdGl2YXRlIHVuc2FmZSBSUEMgY29tbWFuZHMgbGlrZSAvZGlhbC1zZWVkcyBhbmQgL3Vuc2FmZS1mbHVzaC1tZW1wb29sCnVuc2FmZSA9IGZhbHNlCgojIE1heGltdW0gbnVtYmVyIG9mIHNpbXVsdGFuZW91cyBjb25uZWN0aW9ucyAoaW5jbHVkaW5nIFdlYlNvY2tldCkuCiMgSWYgeW91IHdhbnQgdG8gYWNjZXB0IGEgbGFyZ2VyIG51bWJlciB0aGFuIHRoZSBkZWZhdWx0LCBtYWtlIHN1cmUKIyB5b3UgaW5jcmVhc2UgeW91ciBPUyBsaW1pdHMuCiMgMCAtIHVubGltaXRlZC4KIyBTaG91bGQgYmUgJmx0OyB7dWxpbWl0IC1Tbn0gLSB7TWF4TnVtSW5ib3VuZFBlZXJzfSAtIHtNYXhOdW1PdXRib3VuZFBlZXJzfSAtIHtOIG9mIHdhbCwgZGIgYW5kIG90aGVyIG9wZW4gZmlsZXN9CiMgMTAyNCAtIDQwIC0gMTAgLSA1MCA9IDkyNCA9IH45MDAKbWF4LW9wZW4tY29ubmVjdGlvbnMgPSA5MDAKCiMgTWF4aW11bSBudW1iZXIgb2YgdW5pcXVlIGNsaWVudElEcyB0aGF0IGNhbiAvc3Vic2NyaWJlCiMgSWYgeW91J3JlIHVzaW5nIC9icm9hZGNhc3RfdHhfY29tbWl0LCBzZXQgdG8gdGhlIGVzdGltYXRlZCBtYXhpbXVtIG51bWJlcgojIG9mIGJyb2FkY2FzdF90eF9jb21taXQgY2FsbHMgcGVyIGJsb2NrLgptYXgtc3Vic2NyaXB0aW9uLWNsaWVudHMgPSAxMDAKCiMgTWF4aW11bSBudW1iZXIgb2YgdW5pcXVlIHF1ZXJpZXMgYSBnaXZlbiBjbGllbnQgY2FuIC9zdWJzY3JpYmUgdG8KIyBJZiB5b3UncmUgdXNpbmcgYSBMb2NhbCBSUEMgY2xpZW50IGFuZCAvYnJvYWRjYXN0X3R4X2NvbW1pdCwgc2V0IHRoaXMKIyB0byB0aGUgZXN0aW1hdGVkIG1heGltdW0gbnVtYmVyIG9mIGJyb2FkY2FzdF90eF9jb21taXQgY2FsbHMgcGVyIGJsb2NrLgptYXgtc3Vic2NyaXB0aW9ucy1wZXItY2xpZW50ID0gNQoKIyBJZiB0cnVlLCBkaXNhYmxlIHRoZSB3ZWJzb2NrZXQgaW50ZXJmYWNlIHRvIHRoZSBSUEMgc2VydmljZS4gIFRoaXMgaGFzCiMgdGhlIGVmZmVjdCBvZiBkaXNhYmxpbmcgdGhlIC9zdWJzY3JpYmUsIC91bnN1YnNjcmliZSwgYW5kIC91bnN1YnNjcmliZV9hbGwKIyBtZXRob2RzIGZvciBldmVudCBzdWJzY3JpcHRpb24uCiMKIyBFWFBFUklNRU5UQUw6IFRoaXMgc2V0dGluZyB3aWxsIGJlIHJlbW92ZWQgaW4gVGVuZGVybWludCB2MC4zNy4KZXhwZXJpbWVudGFsLWRpc2FibGUtd2Vic29ja2V0ID0gZmFsc2UKCiMgVGhlIHRpbWUgd2luZG93IHNpemUgZm9yIHRoZSBldmVudCBsb2cuIEFsbCBldmVudHMgdXAgdG8gdGhpcyBsb25nIGJlZm9yZQojIHRoZSBsYXRlc3QgKHVwIHRvIEV2ZW50TG9nTWF4SXRlbXMpIHdpbGwgYmUgYXZhaWxhYmxlIGZvciBzdWJzY3JpYmVycyB0bwojIGZldGNoIHZpYSB0aGUgL2V2ZW50cyBtZXRob2QuICBJZiAwICh0aGUgZGVmYXVsdCkgdGhlIGV2ZW50IGxvZyBhbmQgdGhlCiMgL2V2ZW50cyBSUEMgbWV0aG9kIGFyZSBkaXNhYmxlZC4KZXZlbnQtbG9nLXdpbmRvdy1zaXplID0gJnF1b3Q7MHMmcXVvdDsKCiMgVGhlIG1heGl1bXVtIG51bWJlciBvZiBldmVudHMgdGhhdCBtYXkgYmUgcmV0YWluZWQgYnkgdGhlIGV2ZW50IGxvZy4gIElmCiMgdGhpcyB2YWx1ZSBpcyAwLCBubyB1cHBlciBsaW1pdCBpcyBzZXQuIE90aGVyd2lzZSwgaXRlbXMgaW4gZXhjZXNzIG9mCiMgdGhpcyBudW1iZXIgd2lsbCBiZSBkaXNjYXJkZWQgZnJvbSB0aGUgZXZlbnQgbG9nLgojCiMgV2FybmluZzogVGhpcyBzZXR0aW5nIGlzIGEgc2FmZXR5IHZhbHZlLiBTZXR0aW5nIGl0IHRvbyBsb3cgbWF5IGNhdXNlCiMgc3Vic2NyaWJlcnMgdG8gbWlzcyBldmVudHMuICBUcnkgdG8gY2hvb3NlIGEgdmFsdWUgaGlnaGVyIHRoYW4gdGhlCiMgbWF4aW11bSB3b3JzdC1jYXNlIGV4cGVjdGVkIGV2ZW50IGxvYWQgd2l0aGluIHRoZSBjaG9zZW4gd2luZG93IHNpemUgaW4KIyBvcmRpbmFyeSBvcGVyYXRpb24uCiMKIyBGb3IgZXhhbXBsZSwgaWYgdGhlIHdpbmRvdyBzaXplIGlzIDEwIG1pbnV0ZXMgYW5kIHRoZSBub2RlIHR5cGljYWxseQojIGF2ZXJhZ2VzIDEwMDAgZXZlbnRzIHBlciB0ZW4gbWludXRlcywgYnV0IHdpdGggb2NjYXNpb25hbCBrbm93biBzcGlrZXMgb2YKIyB1cCB0byAyMDAwLCBjaG9vc2UgYSB2YWx1ZSAmZ3Q7IDIwMDAuCmV2ZW50LWxvZy1tYXgtaXRlbXMgPSAwCgojIEhvdyBsb25nIHRvIHdhaXQgZm9yIGEgdHggdG8gYmUgY29tbWl0dGVkIGR1cmluZyAvYnJvYWRjYXN0X3R4X2NvbW1pdC4KIyBXQVJOSU5HOiBVc2luZyBhIHZhbHVlIGxhcmdlciB0aGFuIDEwcyB3aWxsIHJlc3VsdCBpbiBpbmNyZWFzaW5nIHRoZQojIGdsb2JhbCBIVFRQIHdyaXRlIHRpbWVvdXQsIHdoaWNoIGFwcGxpZXMgdG8gYWxsIGNvbm5lY3Rpb25zIGFuZCBlbmRwb2ludHMuCiMgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvaXNzdWVzLzM0MzUKdGltZW91dC1icm9hZGNhc3QtdHgtY29tbWl0ID0gJnF1b3Q7MTBzJnF1b3Q7CgojIE1heGltdW0gc2l6ZSBvZiByZXF1ZXN0IGJvZHksIGluIGJ5dGVzCm1heC1ib2R5LWJ5dGVzID0gMTAwMDAwMAoKIyBNYXhpbXVtIHNpemUgb2YgcmVxdWVzdCBoZWFkZXIsIGluIGJ5dGVzCm1heC1oZWFkZXItYnl0ZXMgPSAxMDQ4NTc2CgojIFRoZSBwYXRoIHRvIGEgZmlsZSBjb250YWluaW5nIGNlcnRpZmljYXRlIHRoYXQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIEhUVFBTIHNlcnZlci4KIyBNaWdodCBiZSBlaXRoZXIgYWJzb2x1dGUgcGF0aCBvciBwYXRoIHJlbGF0ZWQgdG8gVGVuZGVybWludCdzIGNvbmZpZyBkaXJlY3RvcnkuCiMgSWYgdGhlIGNlcnRpZmljYXRlIGlzIHNpZ25lZCBieSBhIGNlcnRpZmljYXRlIGF1dGhvcml0eSwKIyB0aGUgY2VydEZpbGUgc2hvdWxkIGJlIHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZSBzZXJ2ZXIncyBjZXJ0aWZpY2F0ZSwgYW55IGludGVybWVkaWF0ZXMsCiMgYW5kIHRoZSBDQSdzIGNlcnRpZmljYXRlLgojIE5PVEU6IGJvdGggdGxzLWNlcnQtZmlsZSBhbmQgdGxzLWtleS1maWxlIG11c3QgYmUgcHJlc2VudCBmb3IgVGVuZGVybWludCB0byBjcmVhdGUgSFRUUFMgc2VydmVyLgojIE90aGVyd2lzZSwgSFRUUCBzZXJ2ZXIgaXMgcnVuLgp0bHMtY2VydC1maWxlID0gJnF1b3Q7JnF1b3Q7CgojIFRoZSBwYXRoIHRvIGEgZmlsZSBjb250YWluaW5nIG1hdGNoaW5nIHByaXZhdGUga2V5IHRoYXQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIEhUVFBTIHNlcnZlci4KIyBNaWdodCBiZSBlaXRoZXIgYWJzb2x1dGUgcGF0aCBvciBwYXRoIHJlbGF0ZWQgdG8gVGVuZGVybWludCdzIGNvbmZpZyBkaXJlY3RvcnkuCiMgTk9URTogYm90aCB0bHMtY2VydC1maWxlIGFuZCB0bHMta2V5LWZpbGUgbXVzdCBiZSBwcmVzZW50IGZvciBUZW5kZXJtaW50IHRvIGNyZWF0ZSBIVFRQUyBzZXJ2ZXIuCiMgT3RoZXJ3aXNlLCBIVFRQIHNlcnZlciBpcyBydW4uCnRscy1rZXktZmlsZSA9ICZxdW90OyZxdW90OwoKIyBwcHJvZiBsaXN0ZW4gYWRkcmVzcyAoaHR0cHM6Ly9nb2xhbmcub3JnL3BrZy9uZXQvaHR0cC9wcHJvZikKcHByb2YtbGFkZHIgPSAmcXVvdDsmcXVvdDsKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgICAgICBQMlAgQ29uZmlndXJhdGlvbiBPcHRpb25zICAgICAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCltwMnBdCgojIFNlbGVjdCB0aGUgcDJwIGludGVybmFsIHF1ZXVlCnF1ZXVlLXR5cGUgPSAmcXVvdDtwcmlvcml0eSZxdW90OwoKIyBBZGRyZXNzIHRvIGxpc3RlbiBmb3IgaW5jb21pbmcgY29ubmVjdGlvbnMKbGFkZHIgPSAmcXVvdDt0Y3A6Ly8wLjAuMC4wOjI2NjU2JnF1b3Q7CgojIEFkZHJlc3MgdG8gYWR2ZXJ0aXNlIHRvIHBlZXJzIGZvciB0aGVtIHRvIGRpYWwKIyBJZiBlbXB0eSwgd2lsbCB1c2UgdGhlIHNhbWUgcG9ydCBhcyB0aGUgbGFkZHIsCiMgYW5kIHdpbGwgaW50cm9zcGVjdCBvbiB0aGUgbGlzdGVuZXIgb3IgdXNlIFVQblAKIyB0byBmaWd1cmUgb3V0IHRoZSBhZGRyZXNzLiBpcCBhbmQgcG9ydCBhcmUgcmVxdWlyZWQKIyBleGFtcGxlOiAxNTkuODkuMTAuOTc6MjY2NTYKZXh0ZXJuYWwtYWRkcmVzcyA9ICZxdW90OyZxdW90OwoKIyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBzZWVkIG5vZGVzIHRvIGNvbm5lY3QgdG8KIyBXZSBvbmx5IHVzZSB0aGVzZSBpZiB3ZSBjYW7igJl0IGNvbm5lY3QgdG8gcGVlcnMgaW4gdGhlIGFkZHJib29rCiMgTk9URTogbm90IHVzZWQgYnkgdGhlIG5ldyBQRVggcmVhY3Rvci4gUGxlYXNlIHVzZSBCb290c3RyYXBQZWVycyBpbnN0ZWFkLgojIFRPRE86IFJlbW92ZSBvbmNlIHAycCByZWZhY3RvciBpcyBjb21wbGV0ZQojIHJlZjogaHR0cHM6I2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2lzc3Vlcy81NjcwCnNlZWRzID0gJnF1b3Q7JnF1b3Q7CgojIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHBlZXJzIHRvIGJlIGFkZGVkIHRvIHRoZSBwZWVyIHN0b3JlCiMgb24gc3RhcnR1cC4gRWl0aGVyIEJvb3RzdHJhcFBlZXJzIG9yIFBlcnNpc3RlbnRQZWVycyBhcmUKIyBuZWVkZWQgZm9yIHBlZXIgZGlzY292ZXJ5CmJvb3RzdHJhcC1wZWVycyA9ICZxdW90OyZxdW90OwoKIyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBub2RlcyB0byBrZWVwIHBlcnNpc3RlbnQgY29ubmVjdGlvbnMgdG8KcGVyc2lzdGVudC1wZWVycyA9ICZxdW90OyZxdW90OwoKIyBVUE5QIHBvcnQgZm9yd2FyZGluZwp1cG5wID0gZmFsc2UKCiMgTWF4aW11bSBudW1iZXIgb2YgY29ubmVjdGlvbnMgKGluYm91bmQgYW5kIG91dGJvdW5kKS4KbWF4LWNvbm5lY3Rpb25zID0gNjQKCiMgUmF0ZSBsaW1pdHMgdGhlIG51bWJlciBvZiBpbmNvbWluZyBjb25uZWN0aW9uIGF0dGVtcHRzIHBlciBJUCBhZGRyZXNzLgptYXgtaW5jb21pbmctY29ubmVjdGlvbi1hdHRlbXB0cyA9IDEwMAoKIyBTZXQgdHJ1ZSB0byBlbmFibGUgdGhlIHBlZXItZXhjaGFuZ2UgcmVhY3RvcgpwZXggPSB0cnVlCgojIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIHBlZXIgSURzIHRvIGtlZXAgcHJpdmF0ZSAod2lsbCBub3QgYmUgZ29zc2lwZWQgdG8gb3RoZXIgcGVlcnMpCiMgV2FybmluZzogSVBzIHdpbGwgYmUgZXhwb3NlZCBhdCAvbmV0X2luZm8sIGZvciBtb3JlIGluZm9ybWF0aW9uIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvaXNzdWVzLzMwNTUKcHJpdmF0ZS1wZWVyLWlkcyA9ICZxdW90OyZxdW90OwoKIyBUb2dnbGUgdG8gZGlzYWJsZSBndWFyZCBhZ2FpbnN0IHBlZXJzIGNvbm5lY3RpbmcgZnJvbSB0aGUgc2FtZSBpcC4KYWxsb3ctZHVwbGljYXRlLWlwID0gZmFsc2UKCiMgUGVlciBjb25uZWN0aW9uIGNvbmZpZ3VyYXRpb24uCmhhbmRzaGFrZS10aW1lb3V0ID0gJnF1b3Q7MjBzJnF1b3Q7CmRpYWwtdGltZW91dCA9ICZxdW90OzNzJnF1b3Q7CgojIFRpbWUgdG8gd2FpdCBiZWZvcmUgZmx1c2hpbmcgbWVzc2FnZXMgb3V0IG9uIHRoZSBjb25uZWN0aW9uCiMgVE9ETzogUmVtb3ZlIG9uY2UgTUNvbm5Db25uZWN0aW9uIGlzIHJlbW92ZWQuCmZsdXNoLXRocm90dGxlLXRpbWVvdXQgPSAmcXVvdDsxMDBtcyZxdW90OwoKIyBNYXhpbXVtIHNpemUgb2YgYSBtZXNzYWdlIHBhY2tldCBwYXlsb2FkLCBpbiBieXRlcwojIFRPRE86IFJlbW92ZSBvbmNlIE1Db25uQ29ubmVjdGlvbiBpcyByZW1vdmVkLgptYXgtcGFja2V0LW1zZy1wYXlsb2FkLXNpemUgPSAxNDAwCgojIFJhdGUgYXQgd2hpY2ggcGFja2V0cyBjYW4gYmUgc2VudCwgaW4gYnl0ZXMvc2Vjb25kCiMgVE9ETzogUmVtb3ZlIG9uY2UgTUNvbm5Db25uZWN0aW9uIGlzIHJlbW92ZWQuCnNlbmQtcmF0ZSA9IDUxMjAwMDAKCiMgUmF0ZSBhdCB3aGljaCBwYWNrZXRzIGNhbiBiZSByZWNlaXZlZCwgaW4gYnl0ZXMvc2Vjb25kCiMgVE9ETzogUmVtb3ZlIG9uY2UgTUNvbm5Db25uZWN0aW9uIGlzIHJlbW92ZWQuCnJlY3YtcmF0ZSA9IDUxMjAwMDAKCgojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICAgICBNZW1wb29sIENvbmZpZ3VyYXRpb24gT3B0aW9uICAgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjClttZW1wb29sXQoKcmVjaGVjayA9IHRydWUKYnJvYWRjYXN0ID0gdHJ1ZQoKIyBNYXhpbXVtIG51bWJlciBvZiB0cmFuc2FjdGlvbnMgaW4gdGhlIG1lbXBvb2wKc2l6ZSA9IDUwMDAKCiMgTGltaXQgdGhlIHRvdGFsIHNpemUgb2YgYWxsIHR4cyBpbiB0aGUgbWVtcG9vbC4KIyBUaGlzIG9ubHkgYWNjb3VudHMgZm9yIHJhdyB0cmFuc2FjdGlvbnMgKGUuZy4gZ2l2ZW4gMU1CIHRyYW5zYWN0aW9ucyBhbmQKIyBtYXgtdHhzLWJ5dGVzPTVNQiwgbWVtcG9vbCB3aWxsIG9ubHkgYWNjZXB0IDUgdHJhbnNhY3Rpb25zKS4KbWF4LXR4cy1ieXRlcyA9IDEwNzM3NDE4MjQKCiMgU2l6ZSBvZiB0aGUgY2FjaGUgKHVzZWQgdG8gZmlsdGVyIHRyYW5zYWN0aW9ucyB3ZSBzYXcgZWFybGllcikgaW4gdHJhbnNhY3Rpb25zCmNhY2hlLXNpemUgPSAxMDAwMAoKIyBEbyBub3QgcmVtb3ZlIGludmFsaWQgdHJhbnNhY3Rpb25zIGZyb20gdGhlIGNhY2hlIChkZWZhdWx0OiBmYWxzZSkKIyBTZXQgdG8gdHJ1ZSBpZiBpdCdzIG5vdCBwb3NzaWJsZSBmb3IgYW55IGludmFsaWQgdHJhbnNhY3Rpb24gdG8gYmVjb21lIHZhbGlkCiMgYWdhaW4gaW4gdGhlIGZ1dHVyZS4Ka2VlcC1pbnZhbGlkLXR4cy1pbi1jYWNoZSA9IGZhbHNlCgojIE1heGltdW0gc2l6ZSBvZiBhIHNpbmdsZSB0cmFuc2FjdGlvbi4KIyBOT1RFOiB0aGUgbWF4IHNpemUgb2YgYSB0eCB0cmFuc21pdHRlZCBvdmVyIHRoZSBuZXR3b3JrIGlzIHttYXgtdHgtYnl0ZXN9LgptYXgtdHgtYnl0ZXMgPSAxMDQ4NTc2CgojIE1heGltdW0gc2l6ZSBvZiBhIGJhdGNoIG9mIHRyYW5zYWN0aW9ucyB0byBzZW5kIHRvIGEgcGVlcgojIEluY2x1ZGluZyBzcGFjZSBuZWVkZWQgYnkgZW5jb2RpbmcgKG9uZSB2YXJpbnQgcGVyIHRyYW5zYWN0aW9uKS4KIyBYWFg6IFVudXNlZCBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9pc3N1ZXMvNTc5NgptYXgtYmF0Y2gtYnl0ZXMgPSAwCgojIHR0bC1kdXJhdGlvbiwgaWYgbm9uLXplcm8sIGRlZmluZXMgdGhlIG1heGltdW0gYW1vdW50IG9mIHRpbWUgYSB0cmFuc2FjdGlvbgojIGNhbiBleGlzdCBmb3IgaW4gdGhlIG1lbXBvb2wuCiMKIyBOb3RlLCBpZiB0dGwtbnVtLWJsb2NrcyBpcyBhbHNvIGRlZmluZWQsIGEgdHJhbnNhY3Rpb24gd2lsbCBiZSByZW1vdmVkIGlmIGl0CiMgaGFzIGV4aXN0ZWQgaW4gdGhlIG1lbXBvb2wgYXQgbGVhc3QgdHRsLW51bS1ibG9ja3MgbnVtYmVyIG9mIGJsb2NrcyBvciBpZiBpdCdzCiMgaW5zZXJ0aW9uIHRpbWUgaW50byB0aGUgbWVtcG9vbCBpcyBiZXlvbmQgdHRsLWR1cmF0aW9uLgp0dGwtZHVyYXRpb24gPSAmcXVvdDswcyZxdW90OwoKIyB0dGwtbnVtLWJsb2NrcywgaWYgbm9uLXplcm8sIGRlZmluZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIGJsb2NrcyBhIHRyYW5zYWN0aW9uCiMgY2FuIGV4aXN0IGZvciBpbiB0aGUgbWVtcG9vbC4KIwojIE5vdGUsIGlmIHR0bC1kdXJhdGlvbiBpcyBhbHNvIGRlZmluZWQsIGEgdHJhbnNhY3Rpb24gd2lsbCBiZSByZW1vdmVkIGlmIGl0CiMgaGFzIGV4aXN0ZWQgaW4gdGhlIG1lbXBvb2wgYXQgbGVhc3QgdHRsLW51bS1ibG9ja3MgbnVtYmVyIG9mIGJsb2NrcyBvciBpZgojIGl0J3MgaW5zZXJ0aW9uIHRpbWUgaW50byB0aGUgbWVtcG9vbCBpcyBiZXlvbmQgdHRsLWR1cmF0aW9uLgp0dGwtbnVtLWJsb2NrcyA9IDAKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgICAgU3RhdGUgU3luYyBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCltzdGF0ZXN5bmNdCiMgU3RhdGUgc3luYyByYXBpZGx5IGJvb3RzdHJhcHMgYSBuZXcgbm9kZSBieSBkaXNjb3ZlcmluZywgZmV0Y2hpbmcsIGFuZCByZXN0b3JpbmcgYSBzdGF0ZSBtYWNoaW5lCiMgc25hcHNob3QgZnJvbSBwZWVycyBpbnN0ZWFkIG9mIGZldGNoaW5nIGFuZCByZXBsYXlpbmcgaGlzdG9yaWNhbCBibG9ja3MuIFJlcXVpcmVzIHNvbWUgcGVlcnMgaW4KIyB0aGUgbmV0d29yayB0byB0YWtlIGFuZCBzZXJ2ZSBzdGF0ZSBtYWNoaW5lIHNuYXBzaG90cy4gU3RhdGUgc3luYyBpcyBub3QgYXR0ZW1wdGVkIGlmIHRoZSBub2RlCiMgaGFzIGFueSBsb2NhbCBzdGF0ZSAoTGFzdEJsb2NrSGVpZ2h0ICZndDsgMCkuIFRoZSBub2RlIHdpbGwgaGF2ZSBhIHRydW5jYXRlZCBibG9jayBoaXN0b3J5LAojIHN0YXJ0aW5nIGZyb20gdGhlIGhlaWdodCBvZiB0aGUgc25hcHNob3QuCmVuYWJsZSA9IGZhbHNlCgojIFN0YXRlIHN5bmMgdXNlcyBsaWdodCBjbGllbnQgdmVyaWZpY2F0aW9uIHRvIHZlcmlmeSBzdGF0ZS4gVGhpcyBjYW4gYmUgZG9uZSBlaXRoZXIgdGhyb3VnaCB0aGUKIyBQMlAgbGF5ZXIgb3IgUlBDIGxheWVyLiBTZXQgdGhpcyB0byB0cnVlIHRvIHVzZSB0aGUgUDJQIGxheWVyLiBJZiBmYWxzZSAoZGVmYXVsdCksIFJQQyBsYXllcgojIHdpbGwgYmUgdXNlZC4KdXNlLXAycCA9IGZhbHNlCgojIElmIHVzaW5nIFJQQywgYXQgbGVhc3QgdHdvIGFkZHJlc3NlcyBuZWVkIHRvIGJlIHByb3ZpZGVkLiBUaGV5IHNob3VsZCBiZSBjb21wYXRpYmxlIHdpdGggbmV0LkRpYWwsCiMgZm9yIGV4YW1wbGU6ICZxdW90O2hvc3QuZXhhbXBsZS5jb206MjEyNSZxdW90OwpycGMtc2VydmVycyA9ICZxdW90OyZxdW90OwoKIyBUaGUgaGFzaCBhbmQgaGVpZ2h0IG9mIGEgdHJ1c3RlZCBibG9jay4gTXVzdCBiZSB3aXRoaW4gdGhlIHRydXN0LXBlcmlvZC4KdHJ1c3QtaGVpZ2h0ID0gMAp0cnVzdC1oYXNoID0gJnF1b3Q7JnF1b3Q7CgojIFRoZSB0cnVzdCBwZXJpb2Qgc2hvdWxkIGJlIHNldCBzbyB0aGF0IFRlbmRlcm1pbnQgY2FuIGRldGVjdCBhbmQgZ29zc2lwIG1pc2JlaGF2aW9yIGJlZm9yZQojIGl0IGlzIGNvbnNpZGVyZWQgZXhwaXJlZC4gRm9yIGNoYWlucyBiYXNlZCBvbiB0aGUgQ29zbW9zIFNESywgb25lIGRheSBsZXNzIHRoYW4gdGhlIHVuYm9uZGluZwojIHBlcmlvZCBzaG91bGQgc3VmZmljZS4KdHJ1c3QtcGVyaW9kID0gJnF1b3Q7MTY4aDBtMHMmcXVvdDsKCiMgVGltZSB0byBzcGVuZCBkaXNjb3ZlcmluZyBzbmFwc2hvdHMgYmVmb3JlIGluaXRpYXRpbmcgYSByZXN0b3JlLgpkaXNjb3ZlcnktdGltZSA9ICZxdW90OzE1cyZxdW90OwoKIyBUZW1wb3JhcnkgZGlyZWN0b3J5IGZvciBzdGF0ZSBzeW5jIHNuYXBzaG90IGNodW5rcywgZGVmYXVsdHMgdG8gb3MuVGVtcERpcigpLgojIFRoZSBzeW5jaHJvbml6ZXIgd2lsbCBjcmVhdGUgYSBuZXcsIHJhbmRvbWx5IG5hbWVkIGRpcmVjdG9yeSB3aXRoaW4gdGhpcyBkaXJlY3RvcnkKIyBhbmQgcmVtb3ZlIGl0IHdoZW4gdGhlIHN5bmMgaXMgY29tcGxldGUuCnRlbXAtZGlyID0gJnF1b3Q7JnF1b3Q7CgojIFRoZSB0aW1lb3V0IGR1cmF0aW9uIGJlZm9yZSByZS1yZXF1ZXN0aW5nIGEgY2h1bmssIHBvc3NpYmx5IGZyb20gYSBkaWZmZXJlbnQKIyBwZWVyIChkZWZhdWx0OiAxNSBzZWNvbmRzKS4KY2h1bmstcmVxdWVzdC10aW1lb3V0ID0gJnF1b3Q7MTVzJnF1b3Q7CgojIFRoZSBudW1iZXIgb2YgY29uY3VycmVudCBjaHVuayBhbmQgYmxvY2sgZmV0Y2hlcnMgdG8gcnVuIChkZWZhdWx0OiA0KS4KZmV0Y2hlcnMgPSAmcXVvdDs0JnF1b3Q7CgojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCiMjIyAgICAgICAgIENvbnNlbnN1cyBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICAgICAjIyMKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwpbY29uc2Vuc3VzXQoKd2FsLWZpbGUgPSAmcXVvdDtkYXRhL2NzLndhbC93YWwmcXVvdDsKCiMgSG93IG1hbnkgYmxvY2tzIHRvIGxvb2sgYmFjayB0byBjaGVjayBleGlzdGVuY2Ugb2YgdGhlIG5vZGUncyBjb25zZW5zdXMgdm90ZXMgYmVmb3JlIGpvaW5pbmcgY29uc2Vuc3VzCiMgV2hlbiBub24temVybywgdGhlIG5vZGUgd2lsbCBwYW5pYyB1cG9uIHJlc3RhcnQKIyBpZiB0aGUgc2FtZSBjb25zZW5zdXMga2V5IHdhcyB1c2VkIHRvIHNpZ24ge2RvdWJsZS1zaWduLWNoZWNrLWhlaWdodH0gbGFzdCBibG9ja3MuCiMgU28sIHZhbGlkYXRvcnMgc2hvdWxkIHN0b3AgdGhlIHN0YXRlIG1hY2hpbmUsIHdhaXQgZm9yIHNvbWUgYmxvY2tzLCBhbmQgdGhlbiByZXN0YXJ0IHRoZSBzdGF0ZSBtYWNoaW5lIHRvIGF2b2lkIHBhbmljLgpkb3VibGUtc2lnbi1jaGVjay1oZWlnaHQgPSAwCgojIEVtcHR5QmxvY2tzIG1vZGUgYW5kIHBvc3NpYmxlIGludGVydmFsIGJldHdlZW4gZW1wdHkgYmxvY2tzCmNyZWF0ZS1lbXB0eS1ibG9ja3MgPSB0cnVlCmNyZWF0ZS1lbXB0eS1ibG9ja3MtaW50ZXJ2YWwgPSAmcXVvdDswcyZxdW90OwoKIyBSZWFjdG9yIHNsZWVwIGR1cmF0aW9uIHBhcmFtZXRlcnMKcGVlci1nb3NzaXAtc2xlZXAtZHVyYXRpb24gPSAmcXVvdDsxMDBtcyZxdW90OwpwZWVyLXF1ZXJ5LW1hajIzLXNsZWVwLWR1cmF0aW9uID0gJnF1b3Q7MnMmcXVvdDsKCiMjIyBVbnNhZmUgVGltZW91dCBPdmVycmlkZXMgIyMjCgojIFRoZXNlIGZpZWxkcyBwcm92aWRlIHRlbXBvcmFyeSBvdmVycmlkZXMgZm9yIHRoZSBUaW1lb3V0IGNvbnNlbnN1cyBwYXJhbWV0ZXJzLgojIFVzZSBvZiB0aGVzZSBwYXJhbWV0ZXJzIGlzIHN0cm9uZ2x5IGRpc2NvdXJhZ2VkLiBVc2luZyB0aGVzZSBwYXJhbWV0ZXJzIG1heSBoYXZlIHNlcmlvdXMKIyBsaXZlbmVzcyBpbXBsaWNhdGlvbnMgZm9yIHRoZSB2YWxpZGF0b3IgYW5kIGZvciB0aGUgY2hhaW4uCiMKIyBUaGVzZSBmaWVsZHMgd2lsbCBiZSByZW1vdmVkIGZyb20gdGhlIGNvbmZpZ3VyYXRpb24gZmlsZSBpbiB0aGUgdjAuMzcgcmVsZWFzZSBvZiBUZW5kZXJtaW50LgojIEZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uLCBzZWUgQURSLTc0OgojIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYmxvYi9tYXN0ZXIvZG9jcy9hcmNoaXRlY3R1cmUvYWRyLTA3NC10aW1lb3V0LXBhcmFtcy5tZAoKIyBUaGlzIGZpZWxkIHByb3ZpZGVzIGFuIHVuc2FmZSBvdmVycmlkZSBvZiB0aGUgUHJvcG9zZSB0aW1lb3V0IGNvbnNlbnN1cyBwYXJhbWV0ZXIuCiMgVGhpcyBmaWVsZCBjb25maWd1cmVzIGhvdyBsb25nIHRoZSBjb25zZW5zdXMgZW5naW5lIHdpbGwgd2FpdCBmb3IgYSBwcm9wb3NhbCBibG9jayBiZWZvcmUgcHJldm90aW5nIG5pbC4KIyBJZiB0aGlzIGZpZWxkIGlzIHNldCB0byBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAwLCBpdCB3aWxsIHRha2UgZWZmZWN0LgojIHVuc2FmZS1wcm9wb3NlLXRpbWVvdXQtb3ZlcnJpZGUgPSAwcwoKIyBUaGlzIGZpZWxkIHByb3ZpZGVzIGFuIHVuc2FmZSBvdmVycmlkZSBvZiB0aGUgUHJvcG9zZURlbHRhIHRpbWVvdXQgY29uc2Vuc3VzIHBhcmFtZXRlci4KIyBUaGlzIGZpZWxkIGNvbmZpZ3VyZXMgaG93IG11Y2ggdGhlIHByb3Bvc2UgdGltZW91dCBpbmNyZWFzZXMgd2l0aCBlYWNoIHJvdW5kLgojIElmIHRoaXMgZmllbGQgaXMgc2V0IHRvIGEgdmFsdWUgZ3JlYXRlciB0aGFuIDAsIGl0IHdpbGwgdGFrZSBlZmZlY3QuCiMgdW5zYWZlLXByb3Bvc2UtdGltZW91dC1kZWx0YS1vdmVycmlkZSA9IDBzCgojIFRoaXMgZmllbGQgcHJvdmlkZXMgYW4gdW5zYWZlIG92ZXJyaWRlIG9mIHRoZSBWb3RlIHRpbWVvdXQgY29uc2Vuc3VzIHBhcmFtZXRlci4KIyBUaGlzIGZpZWxkIGNvbmZpZ3VyZXMgaG93IGxvbmcgdGhlIGNvbnNlbnN1cyBlbmdpbmUgd2lsbCB3YWl0IGFmdGVyCiMgcmVjZWl2aW5nICsyLzMgdm90ZXMgaW4gYSBhcm91bmQuCiMgSWYgdGhpcyBmaWVsZCBpcyBzZXQgdG8gYSB2YWx1ZSBncmVhdGVyIHRoYW4gMCwgaXQgd2lsbCB0YWtlIGVmZmVjdC4KIyB1bnNhZmUtdm90ZS10aW1lb3V0LW92ZXJyaWRlID0gMHMKCiMgVGhpcyBmaWVsZCBwcm92aWRlcyBhbiB1bnNhZmUgb3ZlcnJpZGUgb2YgdGhlIFZvdGVEZWx0YSB0aW1lb3V0IGNvbnNlbnN1cyBwYXJhbWV0ZXIuCiMgVGhpcyBmaWVsZCBjb25maWd1cmVzIGhvdyBtdWNoIHRoZSB2b3RlIHRpbWVvdXQgaW5jcmVhc2VzIHdpdGggZWFjaCByb3VuZC4KIyBJZiB0aGlzIGZpZWxkIGlzIHNldCB0byBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAwLCBpdCB3aWxsIHRha2UgZWZmZWN0LgojIHVuc2FmZS12b3RlLXRpbWVvdXQtZGVsdGEtb3ZlcnJpZGUgPSAwcwoKIyBUaGlzIGZpZWxkIHByb3ZpZGVzIGFuIHVuc2FmZSBvdmVycmlkZSBvZiB0aGUgQ29tbWl0IHRpbWVvdXQgY29uc2Vuc3VzIHBhcmFtZXRlci4KIyBUaGlzIGZpZWxkIGNvbmZpZ3VyZXMgaG93IGxvbmcgdGhlIGNvbnNlbnN1cyBlbmdpbmUgd2lsbCB3YWl0IGFmdGVyIHJlY2VpdmluZwojICsyLzMgcHJlY29tbWl0cyBiZWZvcmUgYmVnaW5uaW5nIHRoZSBuZXh0IGhlaWdodC4KIyBJZiB0aGlzIGZpZWxkIGlzIHNldCB0byBhIHZhbHVlIGdyZWF0ZXIgdGhhbiAwLCBpdCB3aWxsIHRha2UgZWZmZWN0LgojIHVuc2FmZS1jb21taXQtdGltZW91dC1vdmVycmlkZSA9IDBzCgojIFRoaXMgZmllbGQgcHJvdmlkZXMgYW4gdW5zYWZlIG92ZXJyaWRlIG9mIHRoZSBCeXBhc3NDb21taXRUaW1lb3V0IGNvbnNlbnN1cyBwYXJhbWV0ZXIuCiMgVGhpcyBmaWVsZCBjb25maWd1cmVzIGlmIHRoZSBjb25zZW5zdXMgZW5naW5lIHdpbGwgd2FpdCBmb3IgdGhlIGZ1bGwgQ29tbWl0IHRpbWVvdXQKIyBiZWZvcmUgcHJvY2VlZGluZyB0byB0aGUgbmV4dCBoZWlnaHQuCiMgSWYgdGhpcyBmaWVsZCBpcyBzZXQgdG8gdHJ1ZSwgdGhlIGNvbnNlbnN1cyBlbmdpbmUgd2lsbCBwcm9jZWVkIHRvIHRoZSBuZXh0IGhlaWdodAojIGFzIHNvb24gYXMgdGhlIG5vZGUgaGFzIGdhdGhlcmVkIHZvdGVzIGZyb20gYWxsIG9mIHRoZSB2YWxpZGF0b3JzIG9uIHRoZSBuZXR3b3JrLgojIHVuc2FmZS1ieXBhc3MtY29tbWl0LXRpbWVvdXQtb3ZlcnJpZGUgPQoKIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIwojIyMgICBUcmFuc2FjdGlvbiBJbmRleGVyIENvbmZpZ3VyYXRpb24gT3B0aW9ucyAgICAgIyMjCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKW3R4LWluZGV4XQoKIyBUaGUgYmFja2VuZCBkYXRhYmFzZSBsaXN0IHRvIGJhY2sgdGhlIGluZGV4ZXIuCiMgSWYgbGlzdCBjb250YWlucyAmcXVvdDtudWxsJnF1b3Q7IG9yICZxdW90OyZxdW90OywgbWVhbmluZyBubyBpbmRleGVyIHNlcnZpY2Ugd2lsbCBiZSB1c2VkLgojCiMgVGhlIGFwcGxpY2F0aW9uIHdpbGwgc2V0IHdoaWNoIHR4cyB0byBpbmRleC4gSW4gc29tZSBjYXNlcyBhIG5vZGUgb3BlcmF0b3Igd2lsbCBiZSBhYmxlCiMgdG8gZGVjaWRlIHdoaWNoIHR4cyB0byBpbmRleCBiYXNlZCBvbiBjb25maWd1cmF0aW9uIHNldCBpbiB0aGUgYXBwbGljYXRpb24uCiMKIyBPcHRpb25zOgojICAgMSkgJnF1b3Q7bnVsbCZxdW90OwojICAgMikgJnF1b3Q7a3YmcXVvdDsgKGRlZmF1bHQpIC0gdGhlIHNpbXBsZXN0IHBvc3NpYmxlIGluZGV4ZXIsIGJhY2tlZCBieSBrZXktdmFsdWUgc3RvcmFnZSAoZGVmYXVsdHMgdG8gbGV2ZWxEQjsgc2VlIERCQmFja2VuZCkuCiMgICAzKSAmcXVvdDtwc3FsJnF1b3Q7IC0gdGhlIGluZGV4ZXIgc2VydmljZXMgYmFja2VkIGJ5IFBvc3RncmVTUUwuCiMgV2hlbiAmcXVvdDtrdiZxdW90OyBvciAmcXVvdDtwc3FsJnF1b3Q7IGlzIGNob3NlbiAmcXVvdDt0eC5oZWlnaHQmcXVvdDsgYW5kICZxdW90O3R4Lmhhc2gmcXVvdDsgd2lsbCBhbHdheXMgYmUgaW5kZXhlZC4KaW5kZXhlciA9IFsmcXVvdDtrdiZxdW90O10KCiMgVGhlIFBvc3RncmVTUUwgY29ubmVjdGlvbiBjb25maWd1cmF0aW9uLCB0aGUgY29ubmVjdGlvbiBmb3JtYXQ6CiMgICBwb3N0Z3Jlc3FsOi8vJmx0O3VzZXImZ3Q7OiZsdDtwYXNzd29yZCZndDtAJmx0O2hvc3QmZ3Q7OiZsdDtwb3J0Jmd0Oy8mbHQ7ZGImZ3Q7PyZsdDtvcHRzJmd0Owpwc3FsLWNvbm4gPSAmcXVvdDsmcXVvdDsKCiMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMKIyMjICAgICAgIEluc3RydW1lbnRhdGlvbiBDb25maWd1cmF0aW9uIE9wdGlvbnMgICAgICMjIwojIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjCltpbnN0cnVtZW50YXRpb25dCgojIFdoZW4gdHJ1ZSwgUHJvbWV0aGV1cyBtZXRyaWNzIGFyZSBzZXJ2ZWQgdW5kZXIgL21ldHJpY3Mgb24KIyBQcm9tZXRoZXVzTGlzdGVuQWRkci4KIyBDaGVjayBvdXQgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBtZXRyaWNzLgpwcm9tZXRoZXVzID0gZmFsc2UKCiMgQWRkcmVzcyB0byBsaXN0ZW4gZm9yIFByb21ldGhldXMgY29sbGVjdG9yKHMpIGNvbm5lY3Rpb25zCnByb21ldGhldXMtbGlzdGVuLWFkZHIgPSAmcXVvdDs6MjY2NjAmcXVvdDsKCiMgTWF4aW11bSBudW1iZXIgb2Ygc2ltdWx0YW5lb3VzIGNvbm5lY3Rpb25zLgojIElmIHlvdSB3YW50IHRvIGFjY2VwdCBhIGxhcmdlciBudW1iZXIgdGhhbiB0aGUgZGVmYXVsdCwgbWFrZSBzdXJlCiMgeW91IGluY3JlYXNlIHlvdXIgT1MgbGltaXRzLgojIDAgLSB1bmxpbWl0ZWQuCm1heC1vcGVuLWNvbm5lY3Rpb25zID0gMwoKIyBJbnN0cnVtZW50YXRpb24gbmFtZXNwYWNlCm5hbWVzcGFjZSA9ICZxdW90O3RlbmRlcm1pbnQmcXVvdDsK"}}),I._v(" "),Z("h2",{attrs:{id:"empty-blocks-vs-no-empty-blocks"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#empty-blocks-vs-no-empty-blocks"}},[I._v("#")]),I._v(" Empty blocks VS no empty blocks")]),I._v(" "),Z("h3",{attrs:{id:"create-empty-blocks-true"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#create-empty-blocks-true"}},[I._v("#")]),I._v(" create-empty-blocks = true")]),I._v(" "),Z("p",[I._v("If "),Z("code",[I._v("create-empty-blocks")]),I._v(" is set to "),Z("code",[I._v("true")]),I._v(" in your config, blocks will be\ncreated ~ every second (with default consensus parameters). You can regulate\nthe delay between blocks by changing the "),Z("code",[I._v("timeout-commit")]),I._v(". E.g. "),Z("code",[I._v('timeout-commit = "10s"')]),I._v(" should result in ~ 10 second blocks.")]),I._v(" "),Z("h3",{attrs:{id:"create-empty-blocks-false"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#create-empty-blocks-false"}},[I._v("#")]),I._v(" create-empty-blocks = false")]),I._v(" "),Z("p",[I._v("In this setting, blocks are created when transactions received.")]),I._v(" "),Z("p",[I._v("Note after the block H, Tendermint creates something we call a \"proof block\"\n(only if the application hash changed) H+1. The reason for this is to support\nproofs. If you have a transaction in block H that changes the state to X, the\nnew application hash will only be included in block H+1. If after your\ntransaction is committed, you want to get a light-client proof for the new state\n(X), you need the new block to be committed in order to do that because the new\nblock has the new application hash for the state X. That's why we make a new\n(empty) block if the application hash changes. Otherwise, you won't be able to\nmake a proof for the new state.")]),I._v(" "),Z("p",[I._v("Plus, if you set "),Z("code",[I._v("create-empty-blocks-interval")]),I._v(" to something other than the\ndefault ("),Z("code",[I._v("0")]),I._v("), Tendermint will be creating empty blocks even in the absence of\ntransactions every "),Z("code",[I._v("create-empty-blocks-interval")]),I._v(". For instance, with\n"),Z("code",[I._v("create-empty-blocks = false")]),I._v(" and "),Z("code",[I._v('create-empty-blocks-interval = "30s"')]),I._v(",\nTendermint will only create blocks if there are transactions, or after waiting\n30 seconds without receiving any transactions.")]),I._v(" "),Z("h2",{attrs:{id:"p2p-settings"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#p2p-settings"}},[I._v("#")]),I._v(" P2P settings")]),I._v(" "),Z("p",[I._v("This section will cover settings within the p2p section of the "),Z("code",[I._v("config.toml")]),I._v(".")]),I._v(" "),Z("ul",[Z("li",[Z("code",[I._v("external-address")]),I._v(" = is the address that will be advertised for other nodes to use. We recommend setting this field with your public IP and p2p port.\n"),Z("ul",[Z("li",[Z("blockquote",[Z("p",[I._v("We recommend setting an external address. When used in a private network, Tendermint Core currently doesn't advertise the node's public address. There is active and ongoing work to improve the P2P system, but this is a helpful workaround for now.")])])])])]),I._v(" "),Z("li",[Z("code",[I._v("persistent-peers")]),I._v(" = is a list of comma separated peers that you will always want to be connected to. If you're already connected to the maximum number of peers, persistent peers will not be added.")]),I._v(" "),Z("li",[Z("code",[I._v("pex")]),I._v(" = turns the peer exchange reactor on or off. Validator node will want the "),Z("code",[I._v("pex")]),I._v(" turned off so it would not begin gossiping to unknown peers on the network. PeX can also be turned off for statically configured networks with fixed network connectivity. For full nodes on open, dynamic networks, it should be turned on.")]),I._v(" "),Z("li",[Z("code",[I._v("private-peer-ids")]),I._v(" = is a comma-separated list of node ids that will "),Z("em",[I._v("not")]),I._v(" be exposed to other peers (i.e., you will not tell other peers about the ids in this list). This can be filled with a validator's node id.")])]),I._v(" "),Z("p",[I._v("Recently the Tendermint Team conducted a refactor of the p2p layer. This lead to multiple config parameters being deprecated and/or replaced.")]),I._v(" "),Z("p",[I._v("We will cover the new and deprecated parameters below.")]),I._v(" "),Z("h3",{attrs:{id:"new-parameters"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#new-parameters"}},[I._v("#")]),I._v(" New Parameters")]),I._v(" "),Z("p",[I._v("There are three new parameters, which are enabled if use-legacy is set to false.")]),I._v(" "),Z("ul",[Z("li",[Z("code",[I._v("queue-type")]),I._v(" = sets a type of queue to use in the p2p layer. There are three options available "),Z("code",[I._v("fifo")]),I._v(", "),Z("code",[I._v("priority")]),I._v(" and "),Z("code",[I._v("wdrr")]),I._v(". The default is priority")]),I._v(" "),Z("li",[Z("code",[I._v("bootstrap-peers")]),I._v(" = is a list of comma seperated peers which will be used to bootstrap the address book.")]),I._v(" "),Z("li",[Z("code",[I._v("max-connections")]),I._v(" = is the max amount of allowed inbound and outbound connections.")])]),I._v(" "),Z("h3",{attrs:{id:"deprecated-parameters"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#deprecated-parameters"}},[I._v("#")]),I._v(" Deprecated Parameters")]),I._v(" "),Z("blockquote",[Z("p",[I._v("Note: For Tendermint 0.35, there are two p2p implementations. The old version is used by default with the deprecated fields. The new implementation uses different config parameters, explained above.")])]),I._v(" "),Z("ul",[Z("li",[Z("code",[I._v("max-num-inbound-peers")]),I._v(" = is the maximum number of peers you will accept inbound connections from at one time (where they dial your address and initiate the connection). "),Z("em",[I._v("This was replaced by "),Z("code",[I._v("max-connections")])])]),I._v(" "),Z("li",[Z("code",[I._v("max-num-outbound-peers")]),I._v(" = is the maximum number of peers you will initiate outbound connects to at one time (where you dial their address and initiate the connection)."),Z("em",[I._v("This was replaced by "),Z("code",[I._v("max-connections")])])]),I._v(" "),Z("li",[Z("code",[I._v("unconditional-peer-ids")]),I._v(" = is similar to "),Z("code",[I._v("persistent-peers")]),I._v(" except that these peers will be connected to even if you are already connected to the maximum number of peers. This can be a validator node ID on your sentry node. "),Z("em",[I._v("Deprecated")])]),I._v(" "),Z("li",[Z("code",[I._v("seeds")]),I._v(" = is a list of comma separated seed nodes that you will connect upon a start and ask for peers. A seed node is a node that does not participate in consensus but only helps propagate peers to nodes in the networks "),Z("em",[I._v("Deprecated, replaced by bootstrap peers")])])]),I._v(" "),Z("h2",{attrs:{id:"indexing-settings"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#indexing-settings"}},[I._v("#")]),I._v(" Indexing Settings")]),I._v(" "),Z("p",[I._v("Operators can configure indexing via the "),Z("code",[I._v("[tx_index]")]),I._v(" section. The "),Z("code",[I._v("indexer")]),I._v("\nfield takes a series of supported indexers. If "),Z("code",[I._v("null")]),I._v(" is included, indexing will\nbe turned off regardless of other values provided.")]),I._v(" "),Z("h3",{attrs:{id:"supported-indexers"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#supported-indexers"}},[I._v("#")]),I._v(" Supported Indexers")]),I._v(" "),Z("h4",{attrs:{id:"kv"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#kv"}},[I._v("#")]),I._v(" KV")]),I._v(" "),Z("p",[I._v("The "),Z("code",[I._v("kv")]),I._v(" indexer type is an embedded key-value store supported by the main\nunderlying Tendermint database. Using the "),Z("code",[I._v("kv")]),I._v(" indexer type allows you to query\nfor block and transaction events directly against Tendermint's RPC. However, the\nquery syntax is limited and so this indexer type might be deprecated or removed\nentirely in the future.")]),I._v(" "),Z("h4",{attrs:{id:"postgresql"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[I._v("#")]),I._v(" PostgreSQL")]),I._v(" "),Z("p",[I._v("The "),Z("code",[I._v("psql")]),I._v(" indexer type allows an operator to enable block and transaction event\nindexing by proxying it to an external PostgreSQL instance allowing for the events\nto be stored in relational models. Since the events are stored in a RDBMS, operators\ncan leverage SQL to perform a series of rich and complex queries that are not\nsupported by the "),Z("code",[I._v("kv")]),I._v(" indexer type. Since operators can leverage SQL directly,\nsearching is not enabled for the "),Z("code",[I._v("psql")]),I._v(" indexer type via Tendermint's RPC -- any\nsuch query will fail.")]),I._v(" "),Z("p",[I._v("Note, the SQL schema is stored in "),Z("code",[I._v("state/indexer/sink/psql/schema.sql")]),I._v(" and operators\nmust explicitly create the relations prior to starting Tendermint and enabling\nthe "),Z("code",[I._v("psql")]),I._v(" indexer type.")]),I._v(" "),Z("p",[I._v("Example:")]),I._v(" "),Z("tm-code-block",{staticClass:"codeblock",attrs:{language:"shell",base64:"JCBwc3FsIC4uLiAtZiBzdGF0ZS9pbmRleGVyL3NpbmsvcHNxbC9zY2hlbWEuc3FsCg=="}}),I._v(" "),Z("h2",{attrs:{id:"unsafe-consensus-timeout-overrides"}},[Z("a",{staticClass:"header-anchor",attrs:{href:"#unsafe-consensus-timeout-overrides"}},[I._v("#")]),I._v(" Unsafe Consensus Timeout Overrides")]),I._v(" "),Z("p",[I._v("Tendermint version v0.36 provides a set of unsafe overrides for the consensus\ntiming parameters. These parameters are provided as a safety measure in case of\nunusual timing issues during the upgrade to v0.36 so that an operator may\noverride the timings for a single node. These overrides will completely be\nremoved in Tendermint v0.37.")]),I._v(" "),Z("ul",[Z("li",[Z("code",[I._v("unsafe-propose-override")]),I._v(": How long the Tendermint consensus engine will wait\nfor a proposal block before prevoting nil.")]),I._v(" "),Z("li",[Z("code",[I._v("unsafe-propose-delta-override")]),I._v(": How much the propose timeout increase with\neach round.")]),I._v(" "),Z("li",[Z("code",[I._v("unsafe-vote-override")]),I._v(": How long the consensus engine will wait after\nreceiving +2/3 votes in a round.")]),I._v(" "),Z("li",[Z("code",[I._v("unsafe-vote-delta-override")]),I._v(": How much the vote timeout increases with each\nround.")]),I._v(" "),Z("li",[Z("code",[I._v("unsafe-commit-override")]),I._v(": How long the consensus engine will wait after\nreceiving +2/3 precommits before beginning the next height.")]),I._v(" "),Z("li",[Z("code",[I._v("unsafe-bypass-commit-timeout-override")]),I._v(": Configures if the consensus engine\nwill wait for the full commit timeout before proceeding to the next height. If\nthis field is set to true, the consensus engine will proceed to the next\nheight as soon as the node has gathered votes from all of the validators on\nthe network.")])])],1)}),[],!1,null,null,null);l.default=b.exports}}]);