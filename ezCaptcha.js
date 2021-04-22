import React from 'react'

const SITE_KEY = ""; // Must match recaptcha version sitekey in google
const RECAPTCHA_VERSION = "";// allows 2 and 3
const LANGUAGE = "en"; //optional but you must use a supported locale here


/**
 * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 * Xtreme Software Solutions LLC @2020
 * FrontEnd Recaptcha V2 - V3. V0.1
 * Coded By @jerryurenaa
 * XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 */

/**
 * @method loadReCaptchaV3
 * @comment this method should be implemented in the "index.js"
 */
function loadReCaptchaV3 ()
{
    if(parseInt(RECAPTCHA_VERSION) === 3)
    {
        const js = document.createElement("script");

        js.type = "text/javascript";

        js.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}&lang=${LANGUAGE}`;

        document.head.appendChild(js); //this will load in the head
    }
    else
    {
        console.log("Invalid Recaptcha version. This method (loadReCaptchaV3) is only available for recaptcha V3");
    }
}


/**
 * @method hideRecaptchaV3Badge
 * @warning: this function requires you to add the google legal text to the user UI.
 * You are allowed to hide the badge as long as you include the reCAPTCHA branding visibly in the user flow.
 * https://developers.google.com/recaptcha/docs/faq
 */
function hideRecaptchaV3Badge()
{
    //by default check if there is only one class in the dom
    if(document.getElementsByClassName('grecaptcha-badge').style !== undefined)
    {
        document.getElementsByClassName('grecaptcha-badge').style.opacity = 0;
    }
    else
    {
        //set first item of the array to opacity 0
        document.getElementsByClassName('grecaptcha-badge')[0].style.opacity = 0;
    }
}


/**
 * @method getRecaptchaToken
 * @return Token response 
 */
 async function getRecaptchaV3Token()
 {
    if(parseInt(RECAPTCHA_VERSION) === 3)
    {
        if(window.grecaptcha !== 'undefined' && window.grecaptcha.execute !== 'undefined')
        {
            return await window.grecaptcha.execute(SITE_KEY);
        }
    }

    return "This method is only available for recaptcha V3";
 }



/**
 * @method loadReCaptchaV2
 * @comment this method should be implemented in the "index.js"
 */
 function loadReCaptchaV2 ()
 {
    if(parseInt(RECAPTCHA_VERSION) === 2)
    {
        const js = document.createElement("script");

        js.type = "text/javascript";

        js.src = `https://www.google.com/recaptcha/api.js?hl=${LANGUAGE}`;

        document.head.appendChild(js); //this will load in the head
    }
    else
    {
        console.log("Invalid Recaptcha version. This method (loadReCaptchaV2) is only available for recaptcha V2");
    }
 }

function RecaptchaV2Challenge()
{
    if(parseInt(RECAPTCHA_VERSION) === 2)
    {
        return (
            <div
                name="recaptcha"
                className="g-recaptcha"
                data-siteKey={SITE_KEY}>
            </div>
        )
    }
    else 
    {
       return ("This method (RecaptchaV2Challenge) is only available for recaptcha V2"); 
    }
}



/**
 * @method recaptchaV2Reset
 * Comment: this method will reset current challenge because we dont usually have page reload on JS.
 */
function recaptchaV2Reset()
{
    if(parseInt(RECAPTCHA_VERSION) === 2)
    {
        window.grecaptcha.reset();
    }
    else
    {
        console.log("This method (recaptchaV2Reset) is only available for recapthca V2");
    }
}


export {
    loadReCaptchaV3, 
    hideRecaptchaV3Badge,
    getRecaptchaV3Token, 
    loadReCaptchaV2, 
    RecaptchaV2Challenge, 
    recaptchaV2Reset
};
