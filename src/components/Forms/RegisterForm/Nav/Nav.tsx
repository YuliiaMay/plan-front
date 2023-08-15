import { useFormikWizard } from "formik-wizard-form";

type NavProps = {
    currentStep?: number,
    wizard?: any   
}

const checkProperties = (obj: {}): void => {
    for (let key in obj) {
        if (obj[key] !== null && obj[key] !== "") return false;
    }
    return true;
};

const Nav = ({
    currentStep,
    wizard      
}: NavProps) => {
    const context = useFormikWizard();
    console.log(context);    


    return (
        <div>
            <button
                onClick={() => {
                    wizard.push('basic')
                }}
                variant={currentStep === "basic" ? "contained" : "text"}
            >Step 1
            </button>
            <button
                onClick={() => {
                    if (checkProperties(context.values.basic)) {
                        wizard.push("basic");
                    } else {
                        wizard.push("email");
                    }
                }}
                variant={currentStep === "email" ? "contained" : "text"}
            >Step 2
            </button>
            <button
                onClick={() => {
                    if (checkProperties(context.values.basic)) {
                        wizard.push("basic");
                    } else if (checkProperties(context.values.email)) {
                        wizard.push("email");
                    } else {
                        wizard.push("usage");
                    }
                }}
                variant={currentStep === "usage" ? "contained" : "text"}
            >Step 3
            </button>
            <button
                onClick={() => {
                    if (checkProperties(context.values.basic)) {
                        wizard.push("basic");
                    } else if (checkProperties(context.values.email)) {
                        wizard.push("email");
                    } else if (checkProperties(context.values.usage)) {
                        wizard.push("usage");
                    } else {
                        wizard.push("marketing");
                    }
                }}
                variant={currentStep === "marketing" ? "contained" : "text"}
            >Step 4</button>
            
        </div>
    );
}

export default Nav;