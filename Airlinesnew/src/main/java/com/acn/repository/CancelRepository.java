package com.acn.repository;

import java.util.List;

import com.acn.entity.Ticket;

public interface CancelRepository {

	Ticket findTicketById(long ticketId);
	Ticket cancelTicket(long ticketId,double cancelCharges);
	List<Ticket> viewCancelledTicketsByUserId(long userId,String cancelled);

}
