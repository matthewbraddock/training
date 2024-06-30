package com.braddock.mtgbe.model

import jakarta.persistence.*


@Entity
@Table(name = "mtg_cards")
data class Card(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,

    @Column(nullable = false)
    var name: String = "",

    var type: String = "",

    var rarity: String = "",

    var manaCost: String = "",

    var power: String = "",

    var toughness: String = ""
)