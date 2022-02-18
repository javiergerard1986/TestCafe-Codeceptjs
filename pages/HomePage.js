const { I, registerPage} = inject();

module.exports = {
    
    accountTab: '#map_account_tab',
    summaryTab: '#summary_tab',
    accountActivity: '#acount_activity_tab',
    transferFunds: '#transfer_funds_tab',
    payBills: '#pay_bills_tab',
    myMoneyMap: '#my_money_map_tab',
    onlineStatements: '#map_online_statements',

    isPageDisplayed() {
        I.seeElement(this.accountTab)
            && I.seeElement(this.summaryTab)
            && I.seeElement(this.accountActivity)
            && I.seeElement(this.transferFunds)
            && I.seeElement(this.payBills)
            && I.seeElement(this.myMoneyMap)
            && I.seeElement(this.onlineStatements)
        },
}