package com.codewithtuan.fullstack.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not found the use with id"+id);
    }
}
