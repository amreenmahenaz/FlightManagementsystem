package com.acn.service;

import java.time.LocalDate;
import java.util.List;

import com.acn.entity.Bookings;
import com.acn.entity.Flight;
import com.acn.entity.Ticket;
import com.acn.entity.User;

public interface BookTicketService {

	User findUserById(long userId);
	Ticket findTicketById(long ticketId);
	Flight findFlightById(long flightId);
	long bookATicket(Bookings booking);
	List<Flight> searchFlight(String source,String Destination);
	long numberOfSeatsAvailable(LocalDate travelDate,long flightId);
	long checkSeat(LocalDate travelDate,long flightId,long seatNo);
	List<Long>seatsNotAvailable(LocalDate travelDate,long flightId);
	List<Flight>searchFlight(LocalDate departureDate, String source, String Destination);

	
}
