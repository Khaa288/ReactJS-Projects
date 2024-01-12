import getRandomUser from "../../Utilities/Api";

const GetRandomContact = async (props) => {
    const responseFromApi = await getRandomUser();

    return props.handleAddContact({
        name: responseFromApi.data.first_name,
        email: responseFromApi.data.email,
        phone: responseFromApi.data.phone_number
    });
};

const AddRandomContact = (props) => {
    return(
        <div>
            <button 
                className="btn btn-success form-control"
                onClick={() => {GetRandomContact(props)}}
            >
                Add Random Contact
            </button>
        </div>
    );
};

export default AddRandomContact;