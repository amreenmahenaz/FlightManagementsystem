package com.acn.service;

import java.util.List;

import com.acn.entity.Ticket;


public interface CancelService {

	Ticket findTicketById(long ticketId);
	Ticket cancelTicket(long ticketId,double cancelCharges);
	List<Ticket> viewCancelledTicketsByUserId(long userId);

}
