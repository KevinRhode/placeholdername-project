import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_FAMILY_USER } from '../utils/queries';

const FamilyUserComponent = () => {
    //   const [familyUser, setFamilyUser] = useState(null);
    // const token = Auth.loggedIn() ? Auth.getToken() : null;
    // const authContext = {
    //     headers: { Authorization: `Bearer ${token}` },
    // };

    const { loading, data } = useQuery(GET_FAMILY_USER);

    const familyUser = data?.getFamilyUserById || {}


    // useEffect(() => {
    //     if (familyUser) {
    //         createFamilyUser({ variables: familyUser })
    //             .then(response => {
    //                 // Handle the response if needed 
    //                 console.log("User information")
    //             })
    //             .catch(error => {
    //                 // Handle the error if needed
    //                 console.log(" Refer console for log")
    //             });
    //     }
    // }, [createFamilyUser, familyUser]);

    if (loading) {
        return <p>Loading User information...</p>;
    }

    // if (error) {
    //     return <p>Error fetching User information</p>;
    // }

    return (
        <div>
            {familyUser && (
                <>
                    <h3>Family User Information</h3>
                    <p>
                        <strong>Family User ID:</strong> {familyUser._id}
                    </p>
                    <p>
                        <strong>Birthday:</strong> {familyUser.birthDay}
                    </p>
                    <p>
                        <strong>Pronoun:</strong> {familyUser.proNoun}
                    </p>
                    <p>
                        <strong>Religion:</strong> {familyUser.religion}
                    </p>
                </>
            )}
        </div>
    );
};

export default FamilyUserComponent;




// import React, { useState } from 'react';
// import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { GET_FAMILY_USER } from '../utils/queries';

// const FamilyUserComponent = () => {
//     //   const [familyUser, setFamilyUser] = useState(null);
//     const token = Auth.loggedIn() ? Auth.getToken() : null;
//     const authContext = {
//         headers: { Authorization: `Bearer ${token}` },
//     };

//     const [familyUser, { loading, error }] = useQuery(GET_FAMILY_USER);

//     // useEffect(() => {
//     //     if (familyUser) {
//     //         createFamilyUser({ variables: familyUser })
//     //             .then(response => {
//     //                 // Handle the response if needed 
//     //                 console.log("User information")
//     //             })
//     //             .catch(error => {
//     //                 // Handle the error if needed
//     //                 console.log(" Refer console for log")
//     //             });
//     //     }
//     // }, [createFamilyUser, familyUser]);

//     if (loading) {
//         return <p>Loading User information...</p>;
//     }

//     if (error) {
//         return <p>Error fetching User information</p>;
//     }

//     return (
//         <div>
//             {familyUser && (
//                 <>
//                     <h3>Family User Information</h3>
//                     <p>
//                         <strong>Family User ID:</strong> {familyUser._id}
//                     </p>
//                     <p>
//                         <strong>Birthday:</strong> {familyUser.birthDay}
//                     </p>
//                     <p>
//                         <strong>Pronoun:</strong> {familyUser.proNoun}
//                     </p>
//                     <p>
//                         <strong>Religion:</strong> {familyUser.religion}
//                     </p>
//                 </>
//             )}
//         </div>
//     );
// };

// export default FamilyUserComponent;