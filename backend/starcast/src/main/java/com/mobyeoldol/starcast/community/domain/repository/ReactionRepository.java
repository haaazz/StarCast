package com.mobyeoldol.starcast.community.domain.repository;

import com.mobyeoldol.starcast.community.domain.Community;
import com.mobyeoldol.starcast.community.domain.Reaction;
import com.mobyeoldol.starcast.member.domain.Profile;
import com.mobyeoldol.starcast.place.domain.enums.ReactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReactionRepository extends JpaRepository<Reaction, String> {
    long countByCommunity_CommunityUidAndReactionType(String communityUid, ReactionType reactionType);
    List<Reaction> findByProfile_ProfileUid(String profileUid);
    Optional<Reaction> findByProfileAndCommunityAndReactionType(Profile profile, Community community, ReactionType reactionType);
}

