import { useCallback } from "react";
import { FormikWizard } from 'formik-wizard-form';
import steps from '../../../utils/validation/registerWizardSteps';
import {RegisterData} from "../../../utils/types";
import FormWrapper from "./FormWrapper/FormWrapper";


export const RegisterForm = () => {
    console.log("children");
    const handleSubmit = useCallback((values: RegisterData): void => {
        console.log("full values:", values);
    }, []);
    
    return (
        <div>
            <FormikWizard
                steps={steps}
                onSubmit={(values: RegisterData): void => console.log("full values:", values)}
                renderComponent={FormWrapper}
                handlePrev
                handleNext
                isLastStep
                canGoBack
                actionLabel
                currentStep
                wizard                
            />
        </div>
    );
}

export default RegisterForm;