const swtichToggle = document.querySelector("#switch");

swtichToggle.addEventListener("input", handlePlan);

function handlePlan() {

    const plan = {
        annual: {
            basic: 199.99,
            professional: 249.99,
            master: 399.99,
        },
        monthly: {
            basic: 19.99,
            professional: 24.99,
            master: 39.99,
        }
    }


    const body = document.querySelector("body");

    const bodyDataPlan = swtichToggle.checked ? "monthly" : "annual";

    body.setAttribute("data-plan", bodyDataPlan);

    const planTextValues = document.querySelectorAll(".card-item-plan");

    planTextValues.forEach(textValues => {

        const moneySign = textValues.querySelector(".money-sign");

        moneySign.textContent = "$";


        const planText = textValues.querySelector(".plan-value");

        const planName = planText.id;

        const planValue = plan[bodyDataPlan][planName];

        planText.textContent = `${planValue}`;

        console.log(planValue);

    });


    console.log(body.getAttribute("data-plan"));

}

handlePlan();