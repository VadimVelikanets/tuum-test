import React, {useCallback, useState, memo, useEffect, useLayoutEffect} from 'react';
import Input from '../Input/Input';
import TextArea from "../TextArea/TextArea";
import Select from "../Select/Select";
import {geography} from "../../constants/geography";
import {industryData} from "../../constants/industryData";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import SubmitMessage from "../SubmitMessage/SubmitMessage";
const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [about, setAbout] = useState('');
    const [industry, setIndustry] = useState('');
    const [country, setCountry] = useState('');
    const [operating, setOperating] = useState('');
    const [isAcceptPolicy, setAcceptPolicy] = useState(false);
    const [isReceive, setReceive] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(true);
    const [isSubmited, setSubmited] = useState(false);
    const [countries, setCountries] = useState<object[]>([{name: 'N/A'}]);

    const onChangeFistName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value)
    }, [firstName, setFirstName])

    const onChangeLastName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value)
    }, [lastName, setLastName])

    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }, [email, setEmail])

    const onChangeJobTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setJobTitle(e.target.value)
    }, [jobTitle, setJobTitle])

    const onChangeCompanyName= useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyName(e.target.value)
    }, [companyName, setCompanyName])

    const onChangeAbout = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAbout(e.target.value)
    }, [about, setAbout])

    const onSelectOperation = useCallback((item: string) => {
        setOperating(item)
    }, [operating, setOperating])

    const onSelectIndustry = useCallback((item: string) => {
        setIndustry(item)
    }, [industry, setIndustry])

    const onSelectCountry = useCallback((item: string) => {
        setCountry(item)
    }, [country, setCountry, countries])

    const onSubmit = () => {
        setSubmited(true)
    }

    useEffect(() => {
        if(firstName !== '' && lastName !== '' && email !== '' && companyName !== '' && industry !== '' && isAcceptPolicy) {
            setDisableSubmit(false)
        } else {
            setDisableSubmit(true)
        }
    }, [firstName, lastName, email, companyName, industry, isAcceptPolicy])

    useEffect(() => {
        const fetchData = async () => {
            const module = await import("../../constants/countries.json");
            setCountries(prevState => [...prevState, ...module.default])
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="flex flex-wrap justify-between w-full max-w-full md:max-w-[420px] mt-16 pb-10">
                <Input
                    placeholder="First Name*"
                    value={firstName}
                    onChange={onChangeFistName}
                    type="text"
                />
                <Input
                    placeholder="Last Name*"
                    value={lastName}
                    onChange={onChangeLastName}
                    type="text"
                />
                <Input
                    placeholder="Email*"
                    value={email}
                    onChange={onChangeEmail}
                    type="email"
                />
                <Input
                    placeholder="Job title"
                    value={jobTitle}
                    onChange={onChangeJobTitle}
                    type="text"
                />
                <Input
                    placeholder="Company Name*"
                    value={companyName}
                    onChange={onChangeCompanyName}
                    type="text"
                />
                <Select
                    placeholder="Industry*"
                    onSelect={onSelectIndustry}
                    options={industryData}
                />
                <Select
                    placeholder="Country"
                    onSelect={onSelectCountry}
                    options={countries}
                />
                <Select
                    placeholder="Operating geography"
                    onSelect={onSelectOperation}
                    options={geography}
                />
                <TextArea
                    title="What would you like to talk about?"
                    value={about}
                    onChange={onChangeAbout}
                />
                <Checkbox
                    checked={isAcceptPolicy}
                    label="By submitting this form I accept privacy policy and cookie policy."
                    onChange={() => setAcceptPolicy(!isAcceptPolicy)}
                />
                <Checkbox
                    checked={isReceive}
                    label="I would like to receive your newsletter."
                    onChange={() => setReceive(!isReceive)}
                />
                <Button onClick={onSubmit} disabled={disableSubmit}/>
            </div>
            {isSubmited && <SubmitMessage/>}
        </>
    );
};

export default React.memo(ContactForm);