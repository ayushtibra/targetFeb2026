import { useMemo, useState } from "react";
import ActionItem from "./actionItem";
import EmailDescription from "./EmailDescription";
import EmailList from "./EmailList";

const emailData = [
    {
        id: 1,
        text: 'Inbox',
        listEmail: [
            {
                id: 2,
                status: 'Read',
                title: 'New year party',
                description: 'Its hosted on 31st at 8pm'
            },
            {
                id: 3,
                status: 'Unread',
                title: 'Secret Santa party',
                description: 'Its hosted on 25th at 8pm'
            },
            {
                id: 4,
                status: 'Unread',
                title: 'Christmas party',
                description: 'Its hosted on 25th at 8pm'
            },
            {
                id: 5,
                status: 'Unread',
                title: 'Party Timinigs',
                description: 'Its hosted on 25th and 31st at 8pm'
            },
            {
                id: 6,
                status: 'Read',
                title: 'Diwali party',
                description: 'Its hosted on 15th at 8pm'
            }
        ]
    },
    {
        id: 8,
        text: 'Sent',
        listEmail: [
            {
                id: 9,
                status: 'Read',
                title: 'Resigned',
                description: 'I am resigining'
            }
        ]
    },
    {
        id: 7,
        text: 'Favourites',
        listEmail: []
    },
]

const EmailOutlook = () => {
    const [emailDatas, setEmailDatas] = useState(emailData);
    const [activeItem, setActiveItem] = useState('Inbox');
    const [description, setDescription] = useState(null);

    const handleEmailClick = (emailId) => {
        const selectedEmail = emailDatas
            .find(item => item.text === activeItem)
            ?.listEmail.find(email => email.id === emailId);

        setDescription(selectedEmail?.description);


        const updateData = (emailList) => {
            return emailList.map(list => {
                if (list.text == activeItem) {
                    return {
                        ...list,
                        listEmail: list.listEmail.map(email => {
                            if (email.id == emailId) {
                                return {
                                    ...email,
                                    status: email.status == 'Unread' ? 'Read' : 'Read',
                                }
                            }
                            return email;
                        })
                    }
                }

                return list;
            })
        }

        setEmailDatas(prev => updateData(prev));

    }

    const handleSave = (emailId) => {
        const favList = emailDatas.find((list) => list.text == activeItem)?.listEmail.find(email => email.id == emailId);
        console.log('first', favList);
        
        const updateData = (lists) => {
            return lists.map((list) => {
                if(list.text == 'Favourites'){
                    return {
                        ...list, 
                        listEmail: [...list.listEmail, favList]
                    }
                }

                return list;
            })
        }

        setEmailDatas(prev => updateData(prev))
    }

    const activeUnreadCount = useMemo(() => {
        const activeFolder = emailDatas.find(
            folder => folder.text === activeItem
        );

        return activeFolder
            ? activeFolder.listEmail.filter(
                email => email.status === 'Unread'
            ).length
            : 0;
    }, [emailDatas, activeItem]);
    
    console.log('first,', emailDatas)

    return (
        <div className="w-full h-full flex p-4">
            <ActionItem activeUnreadCount={activeUnreadCount} list={emailDatas} activeItem={activeItem} setActiveItem={setActiveItem} setDescription={setDescription} />
            <EmailList list={emailDatas} activeItem={activeItem} handleEmailClick={handleEmailClick} handleSave={handleSave} />
            <EmailDescription description={description} />
        </div>
    )
}

export default EmailOutlook;