var app = new Vue({
	el: '#app',
	data: {
		totalRU: 0,
		resCalcTable: [
			{ type: "Common", value: "1", quantity: "0", total: "0", color: "common"},
			{ type: "Corrosive", value: "2", quantity: "0", total: "0", color: "corrosive"},
			{ type: "Base Metal", value: "3", quantity: "0", total: "0", color: "baseMetal"},
			{ type: "Noble Gas", value: "4", quantity: "0", total: "0", color: "nobleGas"},
			{ type: "Rare Earth", value: "5", quantity: "0", total: "0", color: "rareEarth"},
			{ type: "Precious", value: "6", quantity: "0", total: "0", color: "precious"},
			{ type: "Radioactive", value: "8", quantity: "0", total: "0", color: "radioactive"},
			{ type: "Exotic", value: "25", quantity: "0", total: "0", color: "exotic"}
		]
	},
	methods: {
		clearAllInput: function() {
			for (i = 0; i < this.resCalcTable.length; i++)
				this.resCalcTable[i].quantity = 0;
		},
		wheelNumber: function() {
			return
		}
	},
	updated: function() {
		this.totalRU = this.resCalcTable.reduce((acc, item) => acc + item.total, 0);
	}
	
})