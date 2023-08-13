import { object, string, number } from "yup";
import BasicStep from "../../components/Forms/RegisterForm/BasicStep/BasicStep";
import EmailStep from "../../components/Forms/RegisterForm/EmailStep/EmailStep";
// import MarketingStep from "../../components/Forms/RegisterForm/MarketingStep/MarketingStep";
// import UsageStep from "../../components/Forms/RegisterForm/UsageStep/UsageStep";


interface Step {
    id: string,
    component: any,
    initialValues: {
        sex?: string,
        name?: string,
        password?: string,
        email?: string,
        isSubscribe?: boolean
    },
    validationSchema: any,
    actionLabel: string,
}

const steps: Array<Step> = [
    {
        id: "basic",
        component: BasicStep,
        initialValues: {
            sex: "",
            name: "",
            password: "",
        },
        validationSchema: object().shape({
            sex: string().required("The sex field is required"),
            name: string().required("Name field is required"),
            password: string().required("Password is required"),
        }),
        actionLabel: "Continue",        
    },
    {
        id: "email",
        component: EmailStep,
        initialValues: {
            email: "",
            isSubscribe: false,
        },
        validationSchema: object().shape({
            // email: string().required("The sex field is required"),
            // isSubscribe: boolean(),
        }),
        actionLabel: "Continue",        
    }    
];

export default steps;