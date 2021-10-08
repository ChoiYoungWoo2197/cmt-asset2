package kr.or.cmtasset2.service;

import kr.or.cmtasset2.model.Employee;

import java.util.HashMap;

public interface LoginService {
    Employee loginPost(HashMap<String, Object> map);
}
