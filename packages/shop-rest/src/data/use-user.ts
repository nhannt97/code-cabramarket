import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
// const end_point_url = '/'

export default function useUser() {
  const { data, mutate, error } = useSWR('/api/user.json', fetcher);

  const addOrUpdateContactNumber = async (contact) => {
    // return await fetch(end_point_url,{method: 'POST', body: contact });
  };
  const addOrUpdateAddress = async (address) => {

    // return await fetch(end_point_url,{method: 'POST', body: address });
  };
  const addOrUpdatePaymentCard = async (payment_card) => {

    // return await fetch(end_point_url,{method: 'POST', body: payment_card });
  };
  const deleteContactNumber = async (contactId) => {

    // return await fetch(end_point_url,{method: 'POST', body: contactId });
  };
  const deleteAddress = async (addressId) => {

    // return await fetch(end_point_url,{method: 'POST', body: addressId });
  };
  const deletePaymentCard = async (cardId) => {

    // return await fetch(end_point_url,{method: 'POST', body: cardId });
  };

  return {
    // loggedOut,
    user: data,
    mutate,
    error,
    addOrUpdateContactNumber,
    addOrUpdateAddress,
    addOrUpdatePaymentCard,
    deleteContactNumber,
    deleteAddress,
    deletePaymentCard,
  };
}
