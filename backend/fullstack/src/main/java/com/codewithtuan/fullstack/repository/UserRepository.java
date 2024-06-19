package com.codewithtuan.fullstack.repository;

import com.codewithtuan.fullstack.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
