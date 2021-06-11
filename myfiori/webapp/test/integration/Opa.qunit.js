sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'myfiori/test/integration/pages/MainListReport' ,
        'myfiori/test/integration/pages/MainObjectPage',
        'myfiori/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('myfiori') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);