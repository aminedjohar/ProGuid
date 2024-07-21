package com.proguid.proguid.controller;

import com.proguid.proguid.entity.Guide;
import com.proguid.proguid.services.GuideService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor

public class GuideController {

    private final GuideService guideService;

    @PostMapping("/guide")
     public Guide postGuide(@RequestBody Guide guide){
         return guideService.postGuide(guide);
     }
}
