import React from 'react';

export default function Partnerapi() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        // fetch('http://192.168.10.21:8080/partner/1')
        //     .then((res) => res.json())
        //     .then((res) => setData([...data, res]));
        setData([
            {
                userId: 'rirani',
                jobTitleName: 'Developer',
                firstName: 'Romin',
                lastName: 'Irani',
                preferredFullName: 'Romin Irani',
                employeeCode: 'E1',
                region: 'CA',
                phoneNumber: '408-1234567',
                emailAddress: 'romin.k.irani@gmail.com'
            },
            {
                userId: 'nirani',
                jobTitleName: 'Developer',
                firstName: 'Neil',
                lastName: 'Irani',
                preferredFullName: 'Neil Irani',
                employeeCode: 'E2',
                region: 'CA',
                phoneNumber: '408-1111111',
                emailAddress: 'neilrirani@gmail.com'
            },
            {
                userId: 'thanks',
                jobTitleName: 'Program Directory',
                firstName: 'Tom',
                lastName: 'Hanks',
                preferredFullName: 'Tom Hanks',
                employeeCode: 'E3',
                region: 'CA',
                phoneNumber: '408-2222222',
                emailAddress: 'tomhanks@gmail.com'
            }
        ]);
    }, []);
    return <div></div>;
}
