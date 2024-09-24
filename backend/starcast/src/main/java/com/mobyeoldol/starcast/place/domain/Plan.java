package com.mobyeoldol.starcast.place.domain;

import com.mobyeoldol.starcast.global.entity.BaseTimeEntity;
import com.mobyeoldol.starcast.member.domain.Profile;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Plan extends BaseTimeEntity {

    @Id
    @Column(name = "plan_uid")
    private String planUid;

    @ManyToOne
    @JoinColumn(name = "profile_uid")
    private Profile profile;

    @ManyToOne
    @JoinColumn(name = "place_uid")
    private Place place;

    @Column(name = "date_time")
    private LocalDateTime dateTime;

    @Column(name = "castar_point")
    private int castarPoint;

    @Column(name = "is_deleted")
    private Boolean isDeleted;
}
