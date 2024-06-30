package com.braddock.mtgbe

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class MtgBeApplication

fun main(args: Array<String>) {
    runApplication<MtgBeApplication>(*args)
}
