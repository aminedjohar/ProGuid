package com.proguid.proguid.services;

import com.proguid.proguid.entity.Guide;
import com.proguid.proguid.repository.GuideRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class GuideService {
    private final GuideRepository guideRepository;

    public Guide postGuide(Guide guide){
        return guideRepository.save(guide);
    }
}
