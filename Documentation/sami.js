
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">[Global Namespace]</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:CreateSubscriptionFeaturesTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateSubscriptionFeaturesTable.html">CreateSubscriptionFeaturesTable</a>                    </div>                </li>                            <li data-name="class:CreateSubscriptionUsagesTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateSubscriptionUsagesTable.html">CreateSubscriptionUsagesTable</a>                    </div>                </li>                            <li data-name="class:CreateSubscriptionsTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateSubscriptionsTable.html">CreateSubscriptionsTable</a>                    </div>                </li>                            <li data-name="class:CreateTransactionsTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateTransactionsTable.html">CreateTransactionsTable</a>                    </div>                </li>                            <li data-name="class:CreateWalletsTable" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="CreateWalletsTable.html">CreateWalletsTable</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Zek" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Zek.html">Zek</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Zek_Abone" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Zek/Abone.html">Abone</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Zek_Abone_Builders" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Zek/Abone/Builders.html">Builders</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Zek_Abone_Builders_SubscriptionBuilder" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Builders/SubscriptionBuilder.html">SubscriptionBuilder</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Builders_TransactionBuilder" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Builders/TransactionBuilder.html">TransactionBuilder</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Zek_Abone_Contracts" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Zek/Abone/Contracts.html">Contracts</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Zek_Abone_Contracts_Coupon" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Contracts/Coupon.html">Coupon</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Contracts_Feature" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Contracts/Feature.html">Feature</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Contracts_HasWallets" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Contracts/HasWallets.html">HasWallets</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Contracts_Subscribable" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Contracts/Subscribable.html">Subscribable</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Contracts_Subscriber" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Contracts/Subscriber.html">Subscriber</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Zek_Abone_Exceptions" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Zek/Abone/Exceptions.html">Exceptions</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Zek_Abone_Exceptions_AboneError" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Exceptions/AboneError.html">AboneError</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Exceptions_DowngradeError" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Exceptions/DowngradeError.html">DowngradeError</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Exceptions_InsufficientFunds" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Exceptions/InsufficientFunds.html">InsufficientFunds</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Exceptions_InvalidAmount" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Exceptions/InvalidAmount.html">InvalidAmount</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Exceptions_SubscriptionError" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Exceptions/SubscriptionError.html">SubscriptionError</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Exceptions_WalletError" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Exceptions/WalletError.html">WalletError</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Zek_Abone_Models" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Zek/Abone/Models.html">Models</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Zek_Abone_Models_Subscription" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Models/Subscription.html">Subscription</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Models_SubscriptionFeature" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Models/SubscriptionFeature.html">SubscriptionFeature</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Models_SubscriptionUsage" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Models/SubscriptionUsage.html">SubscriptionUsage</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Models_Transaction" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Models/Transaction.html">Transaction</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Models_Wallet" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Models/Wallet.html">Wallet</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Zek_Abone_Traits" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Zek/Abone/Traits.html">Traits</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Zek_Abone_Traits_HasFeatures" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Traits/HasFeatures.html">HasFeatures</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Traits_HasSubscriptions" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Traits/HasSubscriptions.html">HasSubscriptions</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Traits_HasWallets" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Traits/HasWallets.html">HasWallets</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Traits_Subscribable" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Zek/Abone/Traits/Subscribable.html">Subscribable</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Zek_Abone_Ability" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Zek/Abone/Ability.html">Ability</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_Abone" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Zek/Abone/Abone.html">Abone</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_AboneServiceProvider" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Zek/Abone/AboneServiceProvider.html">AboneServiceProvider</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_BasicCoupon" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Zek/Abone/BasicCoupon.html">BasicCoupon</a>                    </div>                </li>                            <li data-name="class:Zek_Abone_BasicFeature" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Zek/Abone/BasicFeature.html">BasicFeature</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": ".html", "name": "", "doc": "Namespace "},{"type": "Namespace", "link": "Zek.html", "name": "Zek", "doc": "Namespace Zek"},{"type": "Namespace", "link": "Zek/Abone.html", "name": "Zek\\Abone", "doc": "Namespace Zek\\Abone"},{"type": "Namespace", "link": "Zek/Abone/Builders.html", "name": "Zek\\Abone\\Builders", "doc": "Namespace Zek\\Abone\\Builders"},{"type": "Namespace", "link": "Zek/Abone/Contracts.html", "name": "Zek\\Abone\\Contracts", "doc": "Namespace Zek\\Abone\\Contracts"},{"type": "Namespace", "link": "Zek/Abone/Exceptions.html", "name": "Zek\\Abone\\Exceptions", "doc": "Namespace Zek\\Abone\\Exceptions"},{"type": "Namespace", "link": "Zek/Abone/Models.html", "name": "Zek\\Abone\\Models", "doc": "Namespace Zek\\Abone\\Models"},{"type": "Namespace", "link": "Zek/Abone/Traits.html", "name": "Zek\\Abone\\Traits", "doc": "Namespace Zek\\Abone\\Traits"},
            {"type": "Interface", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/Coupon.html", "name": "Zek\\Abone\\Contracts\\Coupon", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Coupon", "fromLink": "Zek/Abone/Contracts/Coupon.html", "link": "Zek/Abone/Contracts/Coupon.html#method_isRecurring", "name": "Zek\\Abone\\Contracts\\Coupon::isRecurring", "doc": "&quot;is Coupon can be applied to next subscription intervals&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Coupon", "fromLink": "Zek/Abone/Contracts/Coupon.html", "link": "Zek/Abone/Contracts/Coupon.html#method_getDiscountAmount", "name": "Zek\\Abone\\Contracts\\Coupon::getDiscountAmount", "doc": "&quot;Return a percentage or discount amount as Money&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Coupon", "fromLink": "Zek/Abone/Contracts/Coupon.html", "link": "Zek/Abone/Contracts/Coupon.html#method_markAsUsed", "name": "Zek\\Abone\\Contracts\\Coupon::markAsUsed", "doc": "&quot;Mark coupon as used&quot;"},
            
            {"type": "Interface", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/Feature.html", "name": "Zek\\Abone\\Contracts\\Feature", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Feature", "fromLink": "Zek/Abone/Contracts/Feature.html", "link": "Zek/Abone/Contracts/Feature.html#method_getCode", "name": "Zek\\Abone\\Contracts\\Feature::getCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Feature", "fromLink": "Zek/Abone/Contracts/Feature.html", "link": "Zek/Abone/Contracts/Feature.html#method_getValue", "name": "Zek\\Abone\\Contracts\\Feature::getValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Feature", "fromLink": "Zek/Abone/Contracts/Feature.html", "link": "Zek/Abone/Contracts/Feature.html#method_interval", "name": "Zek\\Abone\\Contracts\\Feature::interval", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/HasWallets.html", "name": "Zek\\Abone\\Contracts\\HasWallets", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\HasWallets", "fromLink": "Zek/Abone/Contracts/HasWallets.html", "link": "Zek/Abone/Contracts/HasWallets.html#method_newTransaction", "name": "Zek\\Abone\\Contracts\\HasWallets::newTransaction", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\HasWallets", "fromLink": "Zek/Abone/Contracts/HasWallets.html", "link": "Zek/Abone/Contracts/HasWallets.html#method_wallets", "name": "Zek\\Abone\\Contracts\\HasWallets::wallets", "doc": "&quot;Get all of the subscriptions&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\HasWallets", "fromLink": "Zek/Abone/Contracts/HasWallets.html", "link": "Zek/Abone/Contracts/HasWallets.html#method_getWallet", "name": "Zek\\Abone\\Contracts\\HasWallets::getWallet", "doc": "&quot;Get all of the subscriptions&quot;"},
            
            {"type": "Interface", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/Subscribable.html", "name": "Zek\\Abone\\Contracts\\Subscribable", "doc": "&quot;Interface Subscribable&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscribable", "fromLink": "Zek/Abone/Contracts/Subscribable.html", "link": "Zek/Abone/Contracts/Subscribable.html#method_getSubscriptionInterval", "name": "Zek\\Abone\\Contracts\\Subscribable::getSubscriptionInterval", "doc": "&quot;Subscription interval.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscribable", "fromLink": "Zek/Abone/Contracts/Subscribable.html", "link": "Zek/Abone/Contracts/Subscribable.html#method_getSubscriptionPrice", "name": "Zek\\Abone\\Contracts\\Subscribable::getSubscriptionPrice", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscribable", "fromLink": "Zek/Abone/Contracts/Subscribable.html", "link": "Zek/Abone/Contracts/Subscribable.html#method_getFeatures", "name": "Zek\\Abone\\Contracts\\Subscribable::getFeatures", "doc": "&quot;&quot;"},
            
            {"type": "Interface", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/Subscriber.html", "name": "Zek\\Abone\\Contracts\\Subscriber", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscriber", "fromLink": "Zek/Abone/Contracts/Subscriber.html", "link": "Zek/Abone/Contracts/Subscriber.html#method_subscriptions", "name": "Zek\\Abone\\Contracts\\Subscriber::subscriptions", "doc": "&quot;Get all of the subscriptions&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscriber", "fromLink": "Zek/Abone/Contracts/Subscriber.html", "link": "Zek/Abone/Contracts/Subscriber.html#method_newSubscription", "name": "Zek\\Abone\\Contracts\\Subscriber::newSubscription", "doc": "&quot;Begin creating a new subscription.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscriber", "fromLink": "Zek/Abone/Contracts/Subscriber.html", "link": "Zek/Abone/Contracts/Subscriber.html#method_subscription", "name": "Zek\\Abone\\Contracts\\Subscriber::subscription", "doc": "&quot;Get a subscription instance by class name.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscriber", "fromLink": "Zek/Abone/Contracts/Subscriber.html", "link": "Zek/Abone/Contracts/Subscriber.html#method_subscribed", "name": "Zek\\Abone\\Contracts\\Subscriber::subscribed", "doc": "&quot;Determine if the model has a given subscription.&quot;"},
            
            
            {"type": "Class",  "link": "CreateSubscriptionFeaturesTable.html", "name": "CreateSubscriptionFeaturesTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateSubscriptionFeaturesTable", "fromLink": "CreateSubscriptionFeaturesTable.html", "link": "CreateSubscriptionFeaturesTable.html#method_up", "name": "CreateSubscriptionFeaturesTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateSubscriptionFeaturesTable", "fromLink": "CreateSubscriptionFeaturesTable.html", "link": "CreateSubscriptionFeaturesTable.html#method_down", "name": "CreateSubscriptionFeaturesTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateSubscriptionUsagesTable.html", "name": "CreateSubscriptionUsagesTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateSubscriptionUsagesTable", "fromLink": "CreateSubscriptionUsagesTable.html", "link": "CreateSubscriptionUsagesTable.html#method_up", "name": "CreateSubscriptionUsagesTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateSubscriptionUsagesTable", "fromLink": "CreateSubscriptionUsagesTable.html", "link": "CreateSubscriptionUsagesTable.html#method_down", "name": "CreateSubscriptionUsagesTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateSubscriptionsTable.html", "name": "CreateSubscriptionsTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateSubscriptionsTable", "fromLink": "CreateSubscriptionsTable.html", "link": "CreateSubscriptionsTable.html#method_up", "name": "CreateSubscriptionsTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateSubscriptionsTable", "fromLink": "CreateSubscriptionsTable.html", "link": "CreateSubscriptionsTable.html#method_down", "name": "CreateSubscriptionsTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateTransactionsTable.html", "name": "CreateTransactionsTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateTransactionsTable", "fromLink": "CreateTransactionsTable.html", "link": "CreateTransactionsTable.html#method_up", "name": "CreateTransactionsTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateTransactionsTable", "fromLink": "CreateTransactionsTable.html", "link": "CreateTransactionsTable.html#method_down", "name": "CreateTransactionsTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class",  "link": "CreateWalletsTable.html", "name": "CreateWalletsTable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "CreateWalletsTable", "fromLink": "CreateWalletsTable.html", "link": "CreateWalletsTable.html#method_up", "name": "CreateWalletsTable::up", "doc": "&quot;Run the migrations.&quot;"},
                    {"type": "Method", "fromName": "CreateWalletsTable", "fromLink": "CreateWalletsTable.html", "link": "CreateWalletsTable.html#method_down", "name": "CreateWalletsTable::down", "doc": "&quot;Reverse the migrations.&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone", "fromLink": "Zek/Abone.html", "link": "Zek/Abone/Ability.html", "name": "Zek\\Abone\\Ability", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method___construct", "name": "Zek\\Abone\\Ability::__construct", "doc": "&quot;Create a new Subscription instance.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method___toString", "name": "Zek\\Abone\\Ability::__toString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method_canUse", "name": "Zek\\Abone\\Ability::canUse", "doc": "&quot;Determine if the feature is enabled and has\navailable uses.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method_consumed", "name": "Zek\\Abone\\Ability::consumed", "doc": "&quot;Get how many times the feature has been used.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method_remaining", "name": "Zek\\Abone\\Ability::remaining", "doc": "&quot;Get the available uses.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method_enabled", "name": "Zek\\Abone\\Ability::enabled", "doc": "&quot;Check if feature is enabled.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method_value", "name": "Zek\\Abone\\Ability::value", "doc": "&quot;Get feature value.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method_use", "name": "Zek\\Abone\\Ability::use", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method_return", "name": "Zek\\Abone\\Ability::return", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Ability", "fromLink": "Zek/Abone/Ability.html", "link": "Zek/Abone/Ability.html#method_clear", "name": "Zek\\Abone\\Ability::clear", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone", "fromLink": "Zek/Abone.html", "link": "Zek/Abone/Abone.html", "name": "Zek\\Abone\\Abone", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Abone", "fromLink": "Zek/Abone/Abone.html", "link": "Zek/Abone/Abone.html#method_useCurrency", "name": "Zek\\Abone\\Abone::useCurrency", "doc": "&quot;Set the default currency to be used when creating non-existing default wallet.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Abone", "fromLink": "Zek/Abone/Abone.html", "link": "Zek/Abone/Abone.html#method_usesCurrency", "name": "Zek\\Abone\\Abone::usesCurrency", "doc": "&quot;Get the default wallet currency.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Abone", "fromLink": "Zek/Abone/Abone.html", "link": "Zek/Abone/Abone.html#method_exchangeMoneyUsing", "name": "Zek\\Abone\\Abone::exchangeMoneyUsing", "doc": "&quot;Set the custom currency converter.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Abone", "fromLink": "Zek/Abone/Abone.html", "link": "Zek/Abone/Abone.html#method_exchangeMoney", "name": "Zek\\Abone\\Abone::exchangeMoney", "doc": "&quot;Format the given amount into a displayable currency.&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone", "fromLink": "Zek/Abone.html", "link": "Zek/Abone/AboneServiceProvider.html", "name": "Zek\\Abone\\AboneServiceProvider", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\AboneServiceProvider", "fromLink": "Zek/Abone/AboneServiceProvider.html", "link": "Zek/Abone/AboneServiceProvider.html#method_boot", "name": "Zek\\Abone\\AboneServiceProvider::boot", "doc": "&quot;Bootstrap the application events.&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone", "fromLink": "Zek/Abone.html", "link": "Zek/Abone/BasicCoupon.html", "name": "Zek\\Abone\\BasicCoupon", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\BasicCoupon", "fromLink": "Zek/Abone/BasicCoupon.html", "link": "Zek/Abone/BasicCoupon.html#method___construct", "name": "Zek\\Abone\\BasicCoupon::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\BasicCoupon", "fromLink": "Zek/Abone/BasicCoupon.html", "link": "Zek/Abone/BasicCoupon.html#method_isRecurring", "name": "Zek\\Abone\\BasicCoupon::isRecurring", "doc": "&quot;is Coupon can be applied to next subscription intervals&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\BasicCoupon", "fromLink": "Zek/Abone/BasicCoupon.html", "link": "Zek/Abone/BasicCoupon.html#method_markAsUsed", "name": "Zek\\Abone\\BasicCoupon::markAsUsed", "doc": "&quot;Mark coupon as used&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\BasicCoupon", "fromLink": "Zek/Abone/BasicCoupon.html", "link": "Zek/Abone/BasicCoupon.html#method_isUsed", "name": "Zek\\Abone\\BasicCoupon::isUsed", "doc": "&quot;Check if coupon code is used&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\BasicCoupon", "fromLink": "Zek/Abone/BasicCoupon.html", "link": "Zek/Abone/BasicCoupon.html#method_getDiscountAmount", "name": "Zek\\Abone\\BasicCoupon::getDiscountAmount", "doc": "&quot;Return a percentage or discount amount as Money&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone", "fromLink": "Zek/Abone.html", "link": "Zek/Abone/BasicFeature.html", "name": "Zek\\Abone\\BasicFeature", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\BasicFeature", "fromLink": "Zek/Abone/BasicFeature.html", "link": "Zek/Abone/BasicFeature.html#method___construct", "name": "Zek\\Abone\\BasicFeature::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\BasicFeature", "fromLink": "Zek/Abone/BasicFeature.html", "link": "Zek/Abone/BasicFeature.html#method_make", "name": "Zek\\Abone\\BasicFeature::make", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\BasicFeature", "fromLink": "Zek/Abone/BasicFeature.html", "link": "Zek/Abone/BasicFeature.html#method_getCode", "name": "Zek\\Abone\\BasicFeature::getCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\BasicFeature", "fromLink": "Zek/Abone/BasicFeature.html", "link": "Zek/Abone/BasicFeature.html#method_getValue", "name": "Zek\\Abone\\BasicFeature::getValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\BasicFeature", "fromLink": "Zek/Abone/BasicFeature.html", "link": "Zek/Abone/BasicFeature.html#method_interval", "name": "Zek\\Abone\\BasicFeature::interval", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Builders", "fromLink": "Zek/Abone/Builders.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method___construct", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::__construct", "doc": "&quot;Create a new subscription builder instance.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_withCoupon", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::withCoupon", "doc": "&quot;The coupon to apply to a new subscription.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_exchange", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::exchange", "doc": "&quot;Convert currency if currency exchange&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_wallet", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::wallet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_withMetadata", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::withMetadata", "doc": "&quot;The metadata to apply to a new subscription.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_startsAt", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::startsAt", "doc": "&quot;Sets subscription starting date.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_infinite", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::infinite", "doc": "&quot;Marks as subscription infinite&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_create", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::create", "doc": "&quot;Create a new Subscription.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_extend", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::extend", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_prorateBasic", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::prorateBasic", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_store", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::store", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_getDiscountedPrice", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::getDiscountedPrice", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\SubscriptionBuilder", "fromLink": "Zek/Abone/Builders/SubscriptionBuilder.html", "link": "Zek/Abone/Builders/SubscriptionBuilder.html#method_storeAndCharge", "name": "Zek\\Abone\\Builders\\SubscriptionBuilder::storeAndCharge", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Builders", "fromLink": "Zek/Abone/Builders.html", "link": "Zek/Abone/Builders/TransactionBuilder.html", "name": "Zek\\Abone\\Builders\\TransactionBuilder", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method___construct", "name": "Zek\\Abone\\Builders\\TransactionBuilder::__construct", "doc": "&quot;TransactionBuilder constructor.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_unconfirmed", "name": "Zek\\Abone\\Builders\\TransactionBuilder::unconfirmed", "doc": "&quot;Sets transaction as unconfirmed.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_hint", "name": "Zek\\Abone\\Builders\\TransactionBuilder::hint", "doc": "&quot;Sets a hint fon the transaction.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_references", "name": "Zek\\Abone\\Builders\\TransactionBuilder::references", "doc": "&quot;Sets transaction reference.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_at", "name": "Zek\\Abone\\Builders\\TransactionBuilder::at", "doc": "&quot;Sets transaction date.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_force", "name": "Zek\\Abone\\Builders\\TransactionBuilder::force", "doc": "&quot;Disable checking if balance is negative after transaction.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_wallet", "name": "Zek\\Abone\\Builders\\TransactionBuilder::wallet", "doc": "&quot;Sets wallet by name.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_charge", "name": "Zek\\Abone\\Builders\\TransactionBuilder::charge", "doc": "&quot;Creates a money out transaction.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_credit", "name": "Zek\\Abone\\Builders\\TransactionBuilder::credit", "doc": "&quot;Creates a money entry transaction.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_transfer", "name": "Zek\\Abone\\Builders\\TransactionBuilder::transfer", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_store", "name": "Zek\\Abone\\Builders\\TransactionBuilder::store", "doc": "&quot;Stores transaction in database.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_exchange", "name": "Zek\\Abone\\Builders\\TransactionBuilder::exchange", "doc": "&quot;Convert currency if currency exchange.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_exchangedAmount", "name": "Zek\\Abone\\Builders\\TransactionBuilder::exchangedAmount", "doc": "&quot;Returns exchanged Money object.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Builders\\TransactionBuilder", "fromLink": "Zek/Abone/Builders/TransactionBuilder.html", "link": "Zek/Abone/Builders/TransactionBuilder.html#method_getWallet", "name": "Zek\\Abone\\Builders\\TransactionBuilder::getWallet", "doc": "&quot;Returns wallet instance.&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/Coupon.html", "name": "Zek\\Abone\\Contracts\\Coupon", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Coupon", "fromLink": "Zek/Abone/Contracts/Coupon.html", "link": "Zek/Abone/Contracts/Coupon.html#method_isRecurring", "name": "Zek\\Abone\\Contracts\\Coupon::isRecurring", "doc": "&quot;is Coupon can be applied to next subscription intervals&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Coupon", "fromLink": "Zek/Abone/Contracts/Coupon.html", "link": "Zek/Abone/Contracts/Coupon.html#method_getDiscountAmount", "name": "Zek\\Abone\\Contracts\\Coupon::getDiscountAmount", "doc": "&quot;Return a percentage or discount amount as Money&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Coupon", "fromLink": "Zek/Abone/Contracts/Coupon.html", "link": "Zek/Abone/Contracts/Coupon.html#method_markAsUsed", "name": "Zek\\Abone\\Contracts\\Coupon::markAsUsed", "doc": "&quot;Mark coupon as used&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/Feature.html", "name": "Zek\\Abone\\Contracts\\Feature", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Feature", "fromLink": "Zek/Abone/Contracts/Feature.html", "link": "Zek/Abone/Contracts/Feature.html#method_getCode", "name": "Zek\\Abone\\Contracts\\Feature::getCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Feature", "fromLink": "Zek/Abone/Contracts/Feature.html", "link": "Zek/Abone/Contracts/Feature.html#method_getValue", "name": "Zek\\Abone\\Contracts\\Feature::getValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Feature", "fromLink": "Zek/Abone/Contracts/Feature.html", "link": "Zek/Abone/Contracts/Feature.html#method_interval", "name": "Zek\\Abone\\Contracts\\Feature::interval", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/HasWallets.html", "name": "Zek\\Abone\\Contracts\\HasWallets", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\HasWallets", "fromLink": "Zek/Abone/Contracts/HasWallets.html", "link": "Zek/Abone/Contracts/HasWallets.html#method_newTransaction", "name": "Zek\\Abone\\Contracts\\HasWallets::newTransaction", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\HasWallets", "fromLink": "Zek/Abone/Contracts/HasWallets.html", "link": "Zek/Abone/Contracts/HasWallets.html#method_wallets", "name": "Zek\\Abone\\Contracts\\HasWallets::wallets", "doc": "&quot;Get all of the subscriptions&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\HasWallets", "fromLink": "Zek/Abone/Contracts/HasWallets.html", "link": "Zek/Abone/Contracts/HasWallets.html#method_getWallet", "name": "Zek\\Abone\\Contracts\\HasWallets::getWallet", "doc": "&quot;Get all of the subscriptions&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/Subscribable.html", "name": "Zek\\Abone\\Contracts\\Subscribable", "doc": "&quot;Interface Subscribable&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscribable", "fromLink": "Zek/Abone/Contracts/Subscribable.html", "link": "Zek/Abone/Contracts/Subscribable.html#method_getSubscriptionInterval", "name": "Zek\\Abone\\Contracts\\Subscribable::getSubscriptionInterval", "doc": "&quot;Subscription interval.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscribable", "fromLink": "Zek/Abone/Contracts/Subscribable.html", "link": "Zek/Abone/Contracts/Subscribable.html#method_getSubscriptionPrice", "name": "Zek\\Abone\\Contracts\\Subscribable::getSubscriptionPrice", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscribable", "fromLink": "Zek/Abone/Contracts/Subscribable.html", "link": "Zek/Abone/Contracts/Subscribable.html#method_getFeatures", "name": "Zek\\Abone\\Contracts\\Subscribable::getFeatures", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Contracts", "fromLink": "Zek/Abone/Contracts.html", "link": "Zek/Abone/Contracts/Subscriber.html", "name": "Zek\\Abone\\Contracts\\Subscriber", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscriber", "fromLink": "Zek/Abone/Contracts/Subscriber.html", "link": "Zek/Abone/Contracts/Subscriber.html#method_subscriptions", "name": "Zek\\Abone\\Contracts\\Subscriber::subscriptions", "doc": "&quot;Get all of the subscriptions&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscriber", "fromLink": "Zek/Abone/Contracts/Subscriber.html", "link": "Zek/Abone/Contracts/Subscriber.html#method_newSubscription", "name": "Zek\\Abone\\Contracts\\Subscriber::newSubscription", "doc": "&quot;Begin creating a new subscription.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscriber", "fromLink": "Zek/Abone/Contracts/Subscriber.html", "link": "Zek/Abone/Contracts/Subscriber.html#method_subscription", "name": "Zek\\Abone\\Contracts\\Subscriber::subscription", "doc": "&quot;Get a subscription instance by class name.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Contracts\\Subscriber", "fromLink": "Zek/Abone/Contracts/Subscriber.html", "link": "Zek/Abone/Contracts/Subscriber.html#method_subscribed", "name": "Zek\\Abone\\Contracts\\Subscriber::subscribed", "doc": "&quot;Determine if the model has a given subscription.&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Exceptions", "fromLink": "Zek/Abone/Exceptions.html", "link": "Zek/Abone/Exceptions/AboneError.html", "name": "Zek\\Abone\\Exceptions\\AboneError", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Zek\\Abone\\Exceptions", "fromLink": "Zek/Abone/Exceptions.html", "link": "Zek/Abone/Exceptions/DowngradeError.html", "name": "Zek\\Abone\\Exceptions\\DowngradeError", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Exceptions\\DowngradeError", "fromLink": "Zek/Abone/Exceptions/DowngradeError.html", "link": "Zek/Abone/Exceptions/DowngradeError.html#method___construct", "name": "Zek\\Abone\\Exceptions\\DowngradeError::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Exceptions", "fromLink": "Zek/Abone/Exceptions.html", "link": "Zek/Abone/Exceptions/InsufficientFunds.html", "name": "Zek\\Abone\\Exceptions\\InsufficientFunds", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Zek\\Abone\\Exceptions", "fromLink": "Zek/Abone/Exceptions.html", "link": "Zek/Abone/Exceptions/InvalidAmount.html", "name": "Zek\\Abone\\Exceptions\\InvalidAmount", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Zek\\Abone\\Exceptions", "fromLink": "Zek/Abone/Exceptions.html", "link": "Zek/Abone/Exceptions/SubscriptionError.html", "name": "Zek\\Abone\\Exceptions\\SubscriptionError", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Zek\\Abone\\Exceptions", "fromLink": "Zek/Abone/Exceptions.html", "link": "Zek/Abone/Exceptions/WalletError.html", "name": "Zek\\Abone\\Exceptions\\WalletError", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Zek\\Abone\\Models", "fromLink": "Zek/Abone/Models.html", "link": "Zek/Abone/Models/Subscription.html", "name": "Zek\\Abone\\Models\\Subscription", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_subscriber", "name": "Zek\\Abone\\Models\\Subscription::subscriber", "doc": "&quot;Get the user that owns the subscription.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_subscribable", "name": "Zek\\Abone\\Models\\Subscription::subscribable", "doc": "&quot;Get the model subscribed.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_usages", "name": "Zek\\Abone\\Models\\Subscription::usages", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_refund", "name": "Zek\\Abone\\Models\\Subscription::refund", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_ability", "name": "Zek\\Abone\\Models\\Subscription::ability", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_cancel", "name": "Zek\\Abone\\Models\\Subscription::cancel", "doc": "&quot;Cancel the subscription at the end of the billing period.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_cancelNow", "name": "Zek\\Abone\\Models\\Subscription::cancelNow", "doc": "&quot;Cancel the subscription immediately.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_transactions", "name": "Zek\\Abone\\Models\\Subscription::transactions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_resume", "name": "Zek\\Abone\\Models\\Subscription::resume", "doc": "&quot;Resume the cancelled subscription.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_active", "name": "Zek\\Abone\\Models\\Subscription::active", "doc": "&quot;Determine if the subscription is active.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_onFuture", "name": "Zek\\Abone\\Models\\Subscription::onFuture", "doc": "&quot;Determine if the subscription is active.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_ended", "name": "Zek\\Abone\\Models\\Subscription::ended", "doc": "&quot;Determine if the subscription has ended and the grace period has expired.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_onGracePeriod", "name": "Zek\\Abone\\Models\\Subscription::onGracePeriod", "doc": "&quot;Determine if the subscription is within its grace period after cancellation.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_recurring", "name": "Zek\\Abone\\Models\\Subscription::recurring", "doc": "&quot;Determine if the subscription is recurring.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_cancelled", "name": "Zek\\Abone\\Models\\Subscription::cancelled", "doc": "&quot;Determine if the subscription is no longer active.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_setCurrencyAttribute", "name": "Zek\\Abone\\Models\\Subscription::setCurrencyAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_getCurrencyAttribute", "name": "Zek\\Abone\\Models\\Subscription::getCurrencyAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_getRenewalPrice", "name": "Zek\\Abone\\Models\\Subscription::getRenewalPrice", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_setRenewalAmount", "name": "Zek\\Abone\\Models\\Subscription::setRenewalAmount", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeRecurring", "name": "Zek\\Abone\\Models\\Subscription::scopeRecurring", "doc": "&quot;Filter query by recurring.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeActive", "name": "Zek\\Abone\\Models\\Subscription::scopeActive", "doc": "&quot;Filter query by active.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeFuture", "name": "Zek\\Abone\\Models\\Subscription::scopeFuture", "doc": "&quot;Filter query by active.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeOnGracePeriod", "name": "Zek\\Abone\\Models\\Subscription::scopeOnGracePeriod", "doc": "&quot;Filter query by on grace period.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeNotOnGracePeriod", "name": "Zek\\Abone\\Models\\Subscription::scopeNotOnGracePeriod", "doc": "&quot;Filter query by not on grace period.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeCancelled", "name": "Zek\\Abone\\Models\\Subscription::scopeCancelled", "doc": "&quot;Filter query by cancelled.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeNotCancelled", "name": "Zek\\Abone\\Models\\Subscription::scopeNotCancelled", "doc": "&quot;Filter query by not cancelled.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeExpiresInDays", "name": "Zek\\Abone\\Models\\Subscription::scopeExpiresInDays", "doc": "&quot;Filter query by not cancelled.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_getIntervalAttribute", "name": "Zek\\Abone\\Models\\Subscription::getIntervalAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_setIntervalAttribute", "name": "Zek\\Abone\\Models\\Subscription::setIntervalAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_scopeEnded", "name": "Zek\\Abone\\Models\\Subscription::scopeEnded", "doc": "&quot;Filter query by ended.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_getDaysUsed", "name": "Zek\\Abone\\Models\\Subscription::getDaysUsed", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_usageLeft", "name": "Zek\\Abone\\Models\\Subscription::usageLeft", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Subscription", "fromLink": "Zek/Abone/Models/Subscription.html", "link": "Zek/Abone/Models/Subscription.html#method_lastPaid", "name": "Zek\\Abone\\Models\\Subscription::lastPaid", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Models", "fromLink": "Zek/Abone/Models.html", "link": "Zek/Abone/Models/SubscriptionFeature.html", "name": "Zek\\Abone\\Models\\SubscriptionFeature", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Models\\SubscriptionFeature", "fromLink": "Zek/Abone/Models/SubscriptionFeature.html", "link": "Zek/Abone/Models/SubscriptionFeature.html#method_getCode", "name": "Zek\\Abone\\Models\\SubscriptionFeature::getCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\SubscriptionFeature", "fromLink": "Zek/Abone/Models/SubscriptionFeature.html", "link": "Zek/Abone/Models/SubscriptionFeature.html#method_getValue", "name": "Zek\\Abone\\Models\\SubscriptionFeature::getValue", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\SubscriptionFeature", "fromLink": "Zek/Abone/Models/SubscriptionFeature.html", "link": "Zek/Abone/Models/SubscriptionFeature.html#method_subscribable", "name": "Zek\\Abone\\Models\\SubscriptionFeature::subscribable", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\SubscriptionFeature", "fromLink": "Zek/Abone/Models/SubscriptionFeature.html", "link": "Zek/Abone/Models/SubscriptionFeature.html#method_interval", "name": "Zek\\Abone\\Models\\SubscriptionFeature::interval", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Models", "fromLink": "Zek/Abone/Models.html", "link": "Zek/Abone/Models/SubscriptionUsage.html", "name": "Zek\\Abone\\Models\\SubscriptionUsage", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Models\\SubscriptionUsage", "fromLink": "Zek/Abone/Models/SubscriptionUsage.html", "link": "Zek/Abone/Models/SubscriptionUsage.html#method_subscription", "name": "Zek\\Abone\\Models\\SubscriptionUsage::subscription", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\SubscriptionUsage", "fromLink": "Zek/Abone/Models/SubscriptionUsage.html", "link": "Zek/Abone/Models/SubscriptionUsage.html#method_scopeCode", "name": "Zek\\Abone\\Models\\SubscriptionUsage::scopeCode", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\SubscriptionUsage", "fromLink": "Zek/Abone/Models/SubscriptionUsage.html", "link": "Zek/Abone/Models/SubscriptionUsage.html#method_scopeValid", "name": "Zek\\Abone\\Models\\SubscriptionUsage::scopeValid", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Models", "fromLink": "Zek/Abone/Models.html", "link": "Zek/Abone/Models/Transaction.html", "name": "Zek\\Abone\\Models\\Transaction", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Models\\Transaction", "fromLink": "Zek/Abone/Models/Transaction.html", "link": "Zek/Abone/Models/Transaction.html#method_boot", "name": "Zek\\Abone\\Models\\Transaction::boot", "doc": "&quot;Boot event handlers to calculate wallet balance after any transaction&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Transaction", "fromLink": "Zek/Abone/Models/Transaction.html", "link": "Zek/Abone/Models/Transaction.html#method_reference", "name": "Zek\\Abone\\Models\\Transaction::reference", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Transaction", "fromLink": "Zek/Abone/Models/Transaction.html", "link": "Zek/Abone/Models/Transaction.html#method_setReferenceAttribute", "name": "Zek\\Abone\\Models\\Transaction::setReferenceAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Transaction", "fromLink": "Zek/Abone/Models/Transaction.html", "link": "Zek/Abone/Models/Transaction.html#method_wallet", "name": "Zek\\Abone\\Models\\Transaction::wallet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Transaction", "fromLink": "Zek/Abone/Models/Transaction.html", "link": "Zek/Abone/Models/Transaction.html#method_getAmountAttribute", "name": "Zek\\Abone\\Models\\Transaction::getAmountAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Transaction", "fromLink": "Zek/Abone/Models/Transaction.html", "link": "Zek/Abone/Models/Transaction.html#method_setAmountAttribute", "name": "Zek\\Abone\\Models\\Transaction::setAmountAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Transaction", "fromLink": "Zek/Abone/Models/Transaction.html", "link": "Zek/Abone/Models/Transaction.html#method_getCurrencyAttribute", "name": "Zek\\Abone\\Models\\Transaction::getCurrencyAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Transaction", "fromLink": "Zek/Abone/Models/Transaction.html", "link": "Zek/Abone/Models/Transaction.html#method_setCurrencyAttribute", "name": "Zek\\Abone\\Models\\Transaction::setCurrencyAttribute", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Zek\\Abone\\Models", "fromLink": "Zek/Abone/Models.html", "link": "Zek/Abone/Models/Wallet.html", "name": "Zek\\Abone\\Models\\Wallet", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Models\\Wallet", "fromLink": "Zek/Abone/Models/Wallet.html", "link": "Zek/Abone/Models/Wallet.html#method_owner", "name": "Zek\\Abone\\Models\\Wallet::owner", "doc": "&quot;Get morphed model.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Wallet", "fromLink": "Zek/Abone/Models/Wallet.html", "link": "Zek/Abone/Models/Wallet.html#method_setCurrencyAttribute", "name": "Zek\\Abone\\Models\\Wallet::setCurrencyAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Wallet", "fromLink": "Zek/Abone/Models/Wallet.html", "link": "Zek/Abone/Models/Wallet.html#method_getCurrencyAttribute", "name": "Zek\\Abone\\Models\\Wallet::getCurrencyAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Wallet", "fromLink": "Zek/Abone/Models/Wallet.html", "link": "Zek/Abone/Models/Wallet.html#method_transactions", "name": "Zek\\Abone\\Models\\Wallet::transactions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Wallet", "fromLink": "Zek/Abone/Models/Wallet.html", "link": "Zek/Abone/Models/Wallet.html#method_getBalanceAttribute", "name": "Zek\\Abone\\Models\\Wallet::getBalanceAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Wallet", "fromLink": "Zek/Abone/Models/Wallet.html", "link": "Zek/Abone/Models/Wallet.html#method_setBalanceAttribute", "name": "Zek\\Abone\\Models\\Wallet::setBalanceAttribute", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Models\\Wallet", "fromLink": "Zek/Abone/Models/Wallet.html", "link": "Zek/Abone/Models/Wallet.html#method_calculateBalance", "name": "Zek\\Abone\\Models\\Wallet::calculateBalance", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "Zek\\Abone\\Traits", "fromLink": "Zek/Abone/Traits.html", "link": "Zek/Abone/Traits/HasFeatures.html", "name": "Zek\\Abone\\Traits\\HasFeatures", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasFeatures", "fromLink": "Zek/Abone/Traits/HasFeatures.html", "link": "Zek/Abone/Traits/HasFeatures.html#method_getFeatures", "name": "Zek\\Abone\\Traits\\HasFeatures::getFeatures", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasFeatures", "fromLink": "Zek/Abone/Traits/HasFeatures.html", "link": "Zek/Abone/Traits/HasFeatures.html#method_features", "name": "Zek\\Abone\\Traits\\HasFeatures::features", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "Zek\\Abone\\Traits", "fromLink": "Zek/Abone/Traits.html", "link": "Zek/Abone/Traits/HasSubscriptions.html", "name": "Zek\\Abone\\Traits\\HasSubscriptions", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasSubscriptions", "fromLink": "Zek/Abone/Traits/HasSubscriptions.html", "link": "Zek/Abone/Traits/HasSubscriptions.html#method_newSubscription", "name": "Zek\\Abone\\Traits\\HasSubscriptions::newSubscription", "doc": "&quot;Begin creating a new subscription.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasSubscriptions", "fromLink": "Zek/Abone/Traits/HasSubscriptions.html", "link": "Zek/Abone/Traits/HasSubscriptions.html#method_subscriptions", "name": "Zek\\Abone\\Traits\\HasSubscriptions::subscriptions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasSubscriptions", "fromLink": "Zek/Abone/Traits/HasSubscriptions.html", "link": "Zek/Abone/Traits/HasSubscriptions.html#method_subscription", "name": "Zek\\Abone\\Traits\\HasSubscriptions::subscription", "doc": "&quot;Get a subscription instance by class name.&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasSubscriptions", "fromLink": "Zek/Abone/Traits/HasSubscriptions.html", "link": "Zek/Abone/Traits/HasSubscriptions.html#method_subscribed", "name": "Zek\\Abone\\Traits\\HasSubscriptions::subscribed", "doc": "&quot;Determine if the model has a given subscription.&quot;"},
            
            {"type": "Trait", "fromName": "Zek\\Abone\\Traits", "fromLink": "Zek/Abone/Traits.html", "link": "Zek/Abone/Traits/HasWallets.html", "name": "Zek\\Abone\\Traits\\HasWallets", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasWallets", "fromLink": "Zek/Abone/Traits/HasWallets.html", "link": "Zek/Abone/Traits/HasWallets.html#method_getWallet", "name": "Zek\\Abone\\Traits\\HasWallets::getWallet", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasWallets", "fromLink": "Zek/Abone/Traits/HasWallets.html", "link": "Zek/Abone/Traits/HasWallets.html#method_wallets", "name": "Zek\\Abone\\Traits\\HasWallets::wallets", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Zek\\Abone\\Traits\\HasWallets", "fromLink": "Zek/Abone/Traits/HasWallets.html", "link": "Zek/Abone/Traits/HasWallets.html#method_newTransaction", "name": "Zek\\Abone\\Traits\\HasWallets::newTransaction", "doc": "&quot;&quot;"},
            
            {"type": "Trait", "fromName": "Zek\\Abone\\Traits", "fromLink": "Zek/Abone/Traits.html", "link": "Zek/Abone/Traits/Subscribable.html", "name": "Zek\\Abone\\Traits\\Subscribable", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Zek\\Abone\\Traits\\Subscribable", "fromLink": "Zek/Abone/Traits/Subscribable.html", "link": "Zek/Abone/Traits/Subscribable.html#method_subscriptions", "name": "Zek\\Abone\\Traits\\Subscribable::subscriptions", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


