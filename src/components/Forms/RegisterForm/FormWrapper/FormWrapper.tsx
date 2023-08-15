import Nav from "../Nav/Nav";


type FormWrapperProps = {
    children?: React.ReactNode,
    isLastStep?: boolean,
    goToPreviousStep: () => void,
    canGoBack?: boolean,
    actionLabel?: string,
    currentStep?: number,
    wizard?: any     
}


const FormWrapper = ({
    children,
    isLastStep,
    goToPreviousStep,
    canGoBack,
    actionLabel,
    currentStep,
    wizard    
}: FormWrapperProps) => {
    console.log("after");
    
    return (
        <>
            <Nav
                currentStep={currentStep}
                wizard={wizard} />
            {children}
            <div>
                <button
                    type="button"
                    onClick={goToPreviousStep}
                    disabled={!canGoBack}>
                    Back
                </button>
                <button
                    type="submit">
                    {actionLabel || (isLastStep ? "Submit" : "Next step")}
                </button>
            </div>
        </>        
    );
}

export default FormWrapper;