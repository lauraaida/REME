
    mobiscroll.settings = {
        lang: 'en',               // Specify language like: lang: 'pl' or omit setting to use default
        theme: 'ios',             // Specify theme like: theme: 'ios' or omit setting to use default
        themeVariant: 'light'     // More info about themeVariant: https://docs.mobiscroll.com/4-10-6/javascript/scroller#opt-themeVariant
    };
    
    mobiscroll.scroller('#demo-inline', {
        display: 'inline',        // Specify display mode like: display: 'bottom' or omit setting to use default
        layout: 'liquid',         // More info about layout: https://docs.mobiscroll.com/4-10-6/javascript/scroller#opt-layout
        wheels: [                 // More info about wheels: https://docs.mobiscroll.com/4-10-6/javascript/scroller#opt-wheels
            [{
                label: 'First wheel',
                data: ['LSF 5', 'LSF 10', 'LSF 15', 'LSF 20', 'LSF 30', 'LSF 50', 'LSF +50']
            }]
        ]
    });

    mobiscroll.scroller('#demo-akt', {
        display: 'inline',        // Specify display mode like: display: 'bottom' or omit setting to use default
        layout: 'liquid',         // More info about layout: https://docs.mobiscroll.com/4-10-6/javascript/scroller#opt-layout
        wheels: [                 // More info about wheels: https://docs.mobiscroll.com/4-10-6/javascript/scroller#opt-wheels
            [{
                label: 'First wheel',
                data: ['Wandern', 'Rennen', 'div. Sport an Land', 'Relaxen', 'aktives Sonnenbaden', 'Schwimmen', 'Wassersport', 'Skifahren']
            }]
        ]
    });
