'use client';

import { useEffect } from 'react';

const Iubenda = () => {
    useEffect(() => {
        const iubendaConfig = document.createElement('script');
        iubendaConfig.type = 'text/javascript';
        iubendaConfig.innerHTML = `var _iub = _iub || [];
_iub.csConfiguration = {"siteId":3783494,"cookiePolicyId":84646767,"lang":"it","storage":{"useSiteId":true}, "banner": {"rejectButtonDisplay": true}}`;
        document.body.appendChild(iubendaConfig);

        const autoblockingScript = document.createElement('script');
        autoblockingScript.src =
            'https://cs.iubenda.com/autoblocking/3783494.js';
        autoblockingScript.async = true;
        document.body.appendChild(autoblockingScript);

        const iubendaCs = document.createElement('script');
        iubendaCs.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
        iubendaCs.async = true;
        document.body.appendChild(iubendaCs);
    }, []);
    return null;
};
export default Iubenda;
