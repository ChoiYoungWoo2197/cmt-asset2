package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.EmployeeMapper;
import kr.or.cmtasset2.mapper.LoginMapper;
import kr.or.cmtasset2.model.Employee;
import kr.or.cmtasset2.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@RequiredArgsConstructor
public class LoginServiceImpl implements LoginService {
    private final LoginMapper loginMapper;

    @Override
    public Employee loginPost(HashMap<String, Object> map) {
        return loginMapper.loginPost(map);
    }
}
