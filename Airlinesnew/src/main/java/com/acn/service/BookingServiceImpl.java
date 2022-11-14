package com.acn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acn.entity.Bookings;
import com.acn.entity.Flight;
import com.acn.repository.BookingRepositoryImpl;

@Service
public class BookingServiceImpl implements BookingService {

	@Autowired
	BookingRepositoryImpl bookingsRepository;
	public long bookATicket(Bookings booking) {
		
		return bookingsRepository.bookATicket(booking);
	}
	public Bookings findBookingsByBookingId(long bookingId) {
		return bookingsRepository.findBookingsByBookingId(bookingId);
	}
	public Flight findFlightById(long flightId) {
		return bookingsRepository.findFlightById(flightId);
	}
	public Bookings findBookingsByUserId(long userId) {
		 return bookingsRepository.findBookingsByUserId(userId);
	 }
	@Override
	public List<Bookings> getBookingsByUserId(long userId) {
		// TODO Auto-generated method stub
		return bookingsRepository.getBookingsByUserId(userId);
	}
	

	
}
