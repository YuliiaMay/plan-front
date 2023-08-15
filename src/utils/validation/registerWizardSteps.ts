import { object, string, number, boolean } from "yup";
import BasicStep from "../../components/Forms/RegisterForm/BasicStep/BasicStep";
import EmailStep from "../../components/Forms/RegisterForm/EmailStep/EmailStep";
import UsageStep from "../../components/Forms/RegisterForm/UsageStep/UsageStep";
import MarketingStep from "../../components/Forms/RegisterForm/MarketingStep/MarketingStep";
import { RegisterData } from "../types";


const steps: RegisterData[] = [
    {
        id: "basic",
        component: BasicStep,
        initialValues: {
            sex: "",
            age: null,
            name: "",
            password: "",
        },
        validationSchema: object().shape({
            sex: string(),
            age: number(),
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
            email: string().email().required("Email is required"),
            isSubscribe: boolean(),
        }),
        actionLabel: "Continue",        
    },    
    {
        id: "usage",
        component: UsageStep,
        initialValues: {
            usage: "",
        },
        validationSchema: object().shape({
            usage: string().required("This point is required"),
        }),
        actionLabel: "Continue",        
    },      
    {
        id: "marketing",
        component: MarketingStep,
        initialValues: {
            source: "",
            experience: false
        },
        validationSchema: object().shape({
            source: string().required("This point is required"),
            experience: string(),
        }),
        actionLabel: "Submit",        
    }     
];

export default steps;