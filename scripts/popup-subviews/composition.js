function setCampaignElementId(id) {
    var campaign = getCampaign(id);
    $('#campaignId').val(campaign.id);
}

function setCampaignElement(id) {
    setCampaignElementId(id);
}

(function () {
    $('#addCampaign').click(function () {
        var id = guid();
        addCampaign({ id: id, title: "New" });

        var $newElement = $('<li class="campaign" data-id="' + id + '"><div>New</div></li>');
        $newElement.click(function () {
            $('#campaigns li.selected').removeClass("selected");
            $(this).addClass("selected");
            setCampaignElement(id);
        });

        $newElement.insertAfter('#addCampaign');
        $newElement.click();
    });
})();

// load all campaigns
(function () {

})();