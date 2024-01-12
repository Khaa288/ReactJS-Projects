import React from "react";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import Footer from "../Layout/Footer";
import AddContact from "./AddContact";
import FavoriteContact from "./FavoriteContact";
import GeneralContact from "./GeneralContact";

class ContactIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: [
                {
                    id: 1,
                    name: "Lorem Lorem",
                    phone: "666-666-770",
                    email: "lorem@lorem.com",
                    isFavorite: true
                },

                {
                    id: 2,
                    name: "Lorem1 Lorem Lorem",
                    phone: "666-666-770",
                    email: "lorem1@lorem.com",
                    isFavorite: true
                },

                {
                    id: 3,
                    name: "Lorem Favorite",
                    phone: "666-666-770",
                    email: "lorem@favorite.com",
                    isFavorite: false
                },
            ],

            selectedContact: undefined,
            isUpdating: false
        }
    };

    handleAddContact = (newContact) => {  
        if (newContact.name === "") {
            return {status: "failure", msg: "Please enter a valid Name"};
        }

        if (newContact.phone === "") {
            return {status: "failure", msg: "Please enter a valid Phone Number"};
        } 
        
        const duplicateRecords = this.state.contactList.filter((x) => {
            return (x.name === newContact.name || x.phone === newContact.phone) ? true : false;
        });

        if (duplicateRecords.length > 0) {
            return {status: "failure", msg: "Duplicate Record"};
        }
        else {
            const newFinalContact = { 
                ...newContact, 
                id: this.state.contactList.length >= 1 ? this.state.contactList[this.state.contactList.length - 1].id + 1 : 1,
                isFavorite: false
            };
    
            this.setState((state) => {
                return {
                    contactList: state.contactList.concat([newFinalContact]),
                };
            });

            return {status: "success", msg: "Contact was added successfully"};
        }
    };

    handleUpdateContact = (updateContact) => {  
        if (updateContact.name === "") {
            return {status: "failure", msg: "Please enter a valid Name"};
        }

        else if (updateContact.phone === "") {
            return {status: "failure", msg: "Please enter a valid Phone Number"};
        } 
        
        else {
            this.setState((state) => {
                return {
                    contactList: state.contactList.map((obj) => {
                        if (obj.id == updateContact.id) {
                            return {
                                ...obj,
                                name: updateContact.name,
                                email: updateContact.email,
                                phone: updateContact.phone
                            }
                        }
                        return obj;
                    }),
                    isUpdating: false,
                    selectedContact: undefined
                };
            });

            return {status: "success", msg: "Contact was updated successfully"};
        }
    };

    handleDeleteContact = (contact) => {
        this.setState((state) => {
            return {
                contactList: state.contactList.filter(item => item !== contact)
            };
        });
    };

    handleDeleteAllContacts = () => {
        this.setState(() => {
            return {
                contactList: []
            }
        });
    }

    handleToggleFavorite = (contact) => {
        this.setState((state) => {
            return {
                contactList: state.contactList.map((obj) => {
                    return obj.id === contact.id ? {...obj, isFavorite: !obj.isFavorite} : obj;
                })
            };
        });
    };

    handleUpdatingContact = (contact) => {
        this.setState((state) => {
            return {
                selectedContact: contact,
                isUpdating: true
            }
        });
    }

    handleCancelUpdatingContact = () => {
        this.setState((state) => {
            return {
                selectedContact: undefined,
                isUpdating: false
            }
        })
    }

    render() {
        return(
            <div>
                <Header></Header>
                <div className="container" style={{minHeight: "85vh"}}>
                    <div className="row py-3">
                        <div className="col-4 offset-2 row">
                            <AddRandomContact 
                                handleAddContact = {this.handleAddContact}
                            />
                        </div>

                        <div className="col-4 row">
                            <RemoveAllContact
                                handleDeleteAllContacts = {this.handleDeleteAllContacts}
                            />
                        </div>

                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <AddContact 
                                    handleAddContact = {this.handleAddContact}
                                    selectedContact = {this.state.selectedContact}
                                    isUpdating = {this.state.isUpdating}
                                    cancelClick = {this.handleCancelUpdatingContact}
                                    handleUpdateContact = {this.handleUpdateContact}
                                />
                            </div>
                        </div>

                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <FavoriteContact 
                                    contacts={this.state.contactList.filter((u) => u.isFavorite)}
                                    favoriteClick = {this.handleToggleFavorite}
                                    deleteContact = {this.handleDeleteContact}
                                    updateContact = {this.handleUpdatingContact}
                                />
                            </div>
                        </div>

                        <div className="row py-2">
                            <div className="col-8 offset-2 row">
                                <GeneralContact 
                                    contacts = {this.state.contactList.filter((u) => !u.isFavorite)}
                                    favoriteClick = {this.handleToggleFavorite}
                                    deleteContact = {this.handleDeleteContact}
                                    updateContact = {this.handleUpdatingContact}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    };
};

export default ContactIndex;