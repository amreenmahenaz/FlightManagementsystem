package com.acn.repository;

import java.util.List;

import com.acn.entity.Admin;
import com.acn.entity.Flight;

public interface AdminRepository {

	Flight addAFlight(Flight flight);
	Flight removeAFlight(long flightId);
	boolean isValidAdmin(String adminName, String password);
	long addAAdmin(Admin admin);
	Admin findAdminById(long adminId);
	List<Flight> viewAllFlights();
}

