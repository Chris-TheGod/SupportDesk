import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTickets, reset } from '../features/tickets/ticketSlice';
import { Spinner } from '../components/Spinner';
import { BackButton } from '../components/BackButton';

export const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return <div>Tickets</div>;
};
