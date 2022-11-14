package com.acn.service;

import java.util.List;

import com.acn.entity.Admin;
import com.acn.entity.Flight;

public interface AdminService {

	Flight addAFlight(Flight flight);
	Flight removeAFlight(long flightId);
	List<Flight> viewAllFlights();
	boolean isValidAdmin(String adminName, String password);
	long addAAdmin(Admin admin);
	Admin findAdminById(long adminId);
}
