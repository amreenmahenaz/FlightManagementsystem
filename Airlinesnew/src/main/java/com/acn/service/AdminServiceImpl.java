package com.acn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.acn.entity.Admin;
import com.acn.entity.Flight;
import com.acn.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminRepository adminRepository;
	public Flight addAFlight(Flight flight) {
		
		return adminRepository.addAFlight(flight);
	}
	
	public Flight removeAFlight(long flightId) {
		return adminRepository.removeAFlight(flightId);
	}
	
	public List<Flight> viewAllFlights() {
		return adminRepository.viewAllFlights();
	}
	
	public Admin findAdminById(long adminId) {
		return adminRepository.findAdminById(adminId);
	}
	
	public long addAAdmin(Admin admin) {

		return adminRepository.addAAdmin(admin);
	}
	
	public boolean isValidAdmin(String adminName, String password) {
		return adminRepository.isValidAdmin(adminName, password);
	}

}
