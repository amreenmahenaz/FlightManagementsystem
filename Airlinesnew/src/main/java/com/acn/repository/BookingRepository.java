package com.acn.repository;

import java.util.List;

import com.acn.entity.Bookings;
import com.acn.entity.Flight;

public interface BookingRepository {
	long bookATicket(Bookings booking);
	Bookings findBookingsByBookingId(long bookingId);
	Flight findFlightById(long flightId);
    Bookings findBookingsByUserId(long userId);
    List<Bookings> getBookingsByUserId(long userId);
}
