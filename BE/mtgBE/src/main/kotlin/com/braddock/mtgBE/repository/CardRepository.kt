package com.braddock.mtgbe.repository

import com.braddock.mtgbe.model.Card
import org.springframework.data.jpa.repository.JpaRepository

interface CardRepository : JpaRepository<Card, Long> {
    fun findByName(name: String): Card?
}
