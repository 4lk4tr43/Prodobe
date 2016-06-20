var dataModel = {
    campaigns: {},
    stages: [],
    teaser: [],
    carousel: []
};

function getDataModel() {
    return dataModel;
}
function getCampaigns() {
    return dataModel.campaigns;
}
function getCampaign(id) {
    return getCampaigns()[id];
}

function addCampaign(campaign) {
    if (getDataModel().campaigns[campaign.id] != undefined) throw new Error('Error adding campaign, campaign already exists');
    else {
        getDataModel().campaigns[campaign.id] = campaign;
        localStorage.setItem('prodobe-campaigns', JSON.stringify(getCampaigns()));
    }
}