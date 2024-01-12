import Contact from "./Contact";

const GeneralContact = (props) => {
    return(
        <div className="col-12 py-2" style={{borderRadius: "10px", backgroundColor: "#323637"}}>
            <div className="text-center text-white-50">General Contacts</div>
            <div className="p-2">
                {
                    props.contacts.map((contact) => (
                        <Contact 
                            contact = {contact}
                            favoriteClick = {props.favoriteClick}
                            deleteContact = {props.deleteContact}
                            updateContact = {props.updateContact}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default GeneralContact;